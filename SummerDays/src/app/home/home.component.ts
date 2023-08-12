import { Component, OnInit } from '@angular/core';
import { gameLogicService } from '../gameEngine/logic/gamelogic.service';
import { group } from '../gameEngine/Models/group.model';
import { game } from '../gameEngine/Models/game.model';
import { map } from 'rxjs';
import { HttpSercive } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  gameLogic: gameLogicService;
  team: group;
  games: game[] = [];

ngOnInit(): void {
}

goToGame(event: any){
  var givenCode: string = event.target.value;
  var foundGameCode:boolean = false;
  this.games.forEach(game =>{
    if(givenCode == game.codeblad+game.codezaal){
      foundGameCode = true;
      this.gameLogic.setCurrentGame(game);
      this.router.navigate(['game']);
      return;
    }
  });
    if(!foundGameCode){
    console.log("no GameCode Found");
  }
}

constructor(private http: HttpSercive, private router: Router){
  this.gameLogic = gameLogicService.getInstance();
  this.team = this.gameLogic.getGroupInfo();
  this.http.get<any>("/games")
  .pipe(
    map((responseData: {[key: string]: game}) =>
    {
      const data: game[] = [];
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
      this.games = data;

    });
}
}
