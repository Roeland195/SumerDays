import { Component } from '@angular/core';
import { gameLogicService } from '../gameEngine/logic/gamelogic.service';
import { game } from '../gameEngine/Models/game.model';
import { group_games } from '../gameEngine/Models/group.model';
import { HttpSercive } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  teamGameItem: group_games;
  gameLogic: gameLogicService;
  givenAwnser: string = "";
  currentlyPlaying: game;

  onSubmit(){
    switch(this.currentlyPlaying.type){
      case "schrift":
        this.startQuestion();
        break;
      case "question":
        this.startQuestion();
      break;
      case "binary":
        this.startBinary();
      break;
      case "clicker":
        this.startClicker();
      break;
      case "quiz":
        this.startQuiz();
      break;
      case "sudoku":
        this.startSudoku();
      break;
      default:
        this.starttafel();
      break;
    }
  }
private starttafel(){this.router.navigate(['home']);}

private startSudoku(){this.router.navigate(['sudoku']);}

private startQuiz(){this.router.navigate(['quizz']);}

private startClicker(){this.router.navigate(['clicker']);}

private startBinary(){this.router.navigate(['binary']);}
  
public startQuestion(){
  if(this.currentlyPlaying.type == 'question' || 'schrift'){
    console.log("Ik ga controleren");
    var team =this.gameLogic.getGroupInfo();
      if(this.currentlyPlaying.awnser == this.givenAwnser){
        console.log("het antwoord is correct");
        team.points = team.points + this.currentlyPlaying.totalpunten;
        team.games.forEach(x =>{
          if(x.code == this.teamGameItem.code){
            x.points = this.currentlyPlaying.totalpunten;
            x.status = "Succeeded";
            x.succeded = true;
          }
        });
        this.gameLogic.setGroupInfo(team);
      }else{
        console.log("het antwoord is fout");
        team.games.forEach(x =>{
          if(x.code == this.teamGameItem.code){
            x.status = "Failure";
            x.succeded = false;
          }
        });
        this.gameLogic.setGroupInfo(team);
      }

      this.http.put<any>("pool/" + this.gameLogic.getGroupInfo().id ,this.gameLogic.getGroupInfo(), (data) =>
      {
        if(this.currentlyPlaying.awnser == this.givenAwnser){
          var game = this.gameLogic.getCurrentGame();
          game.teamcolor = team.color;
          console.log(game);
          this.http.put<any>("games/" + game.id , game, (data) =>
         {this.router.navigate(['home']);}, ()=>{});
        }else{
          this.router.navigate(['home']);
        }
        
    }, ()=>{});
    }
  }

  addAwnser(event: any){
    this.givenAwnser =event.target.value;
  }

  constructor(private http: HttpSercive, private router: Router){
    this.gameLogic = gameLogicService.getInstance();
    this.currentlyPlaying = this.gameLogic.getCurrentGame();

    var currentTeam = this.gameLogic.getGroupInfo();
    var gameAlreadyInPlayedGameList: boolean = false;

    if(currentTeam.games){
      currentTeam.games.forEach(playedGame =>{
        if(this.currentlyPlaying.codeblad+this.currentlyPlaying.codezaal == playedGame.code){
          gameAlreadyInPlayedGameList = true;
          return;
        }
      });
    }

    this.teamGameItem = new group_games(this.currentlyPlaying.name, this.currentlyPlaying.codeblad+this.currentlyPlaying.codezaal, "in Progress",0,false);

    if(!gameAlreadyInPlayedGameList){
      if(!currentTeam.games){
        currentTeam.games = [];
      }
      currentTeam.games.push(this.teamGameItem);
      this.gameLogic.setGroupInfo(currentTeam);
  
      console.log(currentTeam);
  
      this.http.put<any>("pool/" + this.gameLogic.getGroupInfo().id ,this.gameLogic.getGroupInfo(), (data) =>
      {}, ()=>{});
    }


    //console.log(this.currentlyPlaying);
  }
}
