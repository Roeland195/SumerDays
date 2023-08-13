import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gameLogicService } from 'src/app/gameEngine/logic/gamelogic.service';
import { HttpSercive } from 'src/app/http.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit{
  ngOnInit(): void {
  }
  gameLogic: gameLogicService;
  pageCounter: number;
  totalClicked: number = 0;
  gameIsFinished: boolean;

  constructor(private http: HttpSercive, private router: Router){
    this.gameLogic = gameLogicService.getInstance();
    this.pageCounter = 20;
    this.gameIsFinished = false;

    console.log(this.gameLogic.getGroupInfo());
    const interval = setInterval(() => {
      this.pageCounter--;
      if(this.pageCounter <= 0) {
        this.gameIsFinished= true;
        clearInterval(interval);
        var totalScore = Math.floor(this.totalClicked / 10)
        //save Score
        var team = this.gameLogic.getGroupInfo();
        team.points = team.points + totalScore;
        team.games.forEach(x =>{
          if(x.code == this.gameLogic.getCurrentGame().codeblad+this.gameLogic.getCurrentGame().codezaal){
            x.points = totalScore;
            x.status = "Succeeded";
            x.succeded = true;
          }
        });
        this.gameLogic.setGroupInfo(team);
        this.http.put<any>("pool/" + this.gameLogic.getGroupInfo().id ,this.gameLogic.getGroupInfo(), (data) =>
      {
        var game = this.gameLogic.getCurrentGame();
        game.teamcolor = team.color;
        console.log(game);
        this.http.put<any>("games/" + game.id , game, (data) =>
       {this.router.navigate(['home']);}, ()=>{});
      }, ()=>{});
      }
    }, 1000);
  }

   clickedPage() {
    if(this.gameIsFinished)
      return;
    this.totalClicked ++;
  }
}  