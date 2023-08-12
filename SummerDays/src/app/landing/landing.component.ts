import { Component, OnInit } from '@angular/core';
import { HttpSercive } from '../http.service';
import { Router } from '@angular/router';
import { group } from '../gameEngine/Models/group.model';
import { map } from 'rxjs/operators';
import { color } from '../gameEngine/Models/color.model';
import { gameLogicService } from '../gameEngine/logic/gamelogic.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  gameLogic: gameLogicService;
  members: string[];
  team: group | any;

  ngOnInit(): void {}

  constructor(private http: HttpSercive, private router: Router){
    this.gameLogic = gameLogicService.getInstance();
    this.members = [];
  }

  checkIfExistingTeam(name: string)
  {
    var haveFoundTeam: boolean = false;
    this.http.get<any>("/pool")
    .pipe(
      map((responseData: {[key: string]: group}) =>
      {
        const data: group[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key))
          {
            data.push({ ...responseData[key], id: key});
          }
        }
        return data;
      })
    ).subscribe(
      (data) =>
      {
        data.forEach((team) => 
        {
          if(team.code == name)
          {
            this.team = new group(team.name, team.code, team.color, team.members, team.games, team.points);
            if(this.team){
              haveFoundTeam = true;
              this.gameLogic.setGroupInfo(this.team);
              this.router.navigate(['home']);
              return;
            }
          }
        });

        if(!haveFoundTeam)
        {
          this.pickColor(name);
        }else{
        }
      });
  }

  pickColor(name: string){
    this.http.get<any>("/colors")
    .pipe(
      map((responseData: {[key: string]: color}) =>{
        const data: color[] = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            data.push({ ...responseData[key], id: key});
          }
        }
      return data;
      })
    )
    .subscribe(
      (data) => 
      {
        if(data.length == 0){
          console.log("Game has not been started yet");
          return;
        }
        var i = 0;
        var foundFreeColor = false;
        while(!foundFreeColor){
          if(i == data.length){
            foundFreeColor= true;
            console.log("No more Colors Left");
          }
          i++;

          var chosenColor: color =  data[Math.floor(Math.random() * data.length)];

          if(!chosenColor.taken){
            chosenColor.taken = true;
            this.saveTeam(chosenColor, name);
            foundFreeColor = true;
          }
          //saveTeam()
         }
      }, () => {}
    );
  }

  saveTeam(chosenColor: color, name: string){
    this.http.put<any>("colors/" + chosenColor.id ,chosenColor, (data) =>
    {
      this.team = new group(name, this.makeid(6), chosenColor.color, this.members, [], 0);
      this.http.post<any>("pool", this.team, (data) =>
      {

        this.http.get<any>("/pool")
        .pipe(
          map((responseData: {[key: string]: group}) =>{
            const data: group[] = [];
            for (const key in responseData){
              if (responseData.hasOwnProperty(key)){
                data.push({ ...responseData[key], id: key});
              }
            }
          return data;
          })
        )
        .subscribe(
          (data) => 
          {
            data.forEach(team =>{
              if(team.code == this.team.code){
                console.log(team);
                this.gameLogic.setGroupInfo(team);
                this.router.navigate(['home']);
              }
            });
          }, () => {}
        );
      }, ()=>{});
    }, ()=>{});
  }

  onSubmit(name: string){
    this.checkIfExistingTeam(name);
  }

  addMember(event: any) {
    this.members.push(event.target.value);
    }

  private makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
}
