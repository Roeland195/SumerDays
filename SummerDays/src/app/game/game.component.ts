import { Component } from '@angular/core';
import { gameLogicService } from '../gameEngine/logic/gamelogic.service';
import { game } from '../gameEngine/Models/game.model';
import { group, group_games } from '../gameEngine/Models/group.model';
import { HttpSercive } from '../http.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { quizz } from '../gameEngine/Models/quizz.model';
import { grid_game } from '../gameEngine/Models/grid.model';

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
  correctAwnser: boolean = false;
  currentImageFile: boolean = false;

  onSubmit(){
    switch(this.currentlyPlaying.type){
      case "schrift":
        this.startQuestion();
        break;
      case "question":
        this.startQuestion();
      break;
      case "zoek":
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
  console.log("startQuestion");
  if(this.currentlyPlaying.type == 'question' || this.currentlyPlaying.type == 'schrift' || this.currentlyPlaying.type == 'zoek'){
    console.log("Ik ga controleren");
    var team =this.gameLogic.getGroupInfo();
    if(this.currentlyPlaying.name == "Wat zullen we eten de hele vergadering lang"){
      console.log();
      if(this.currentlyPlaying.awnser.includes(this.givenAwnser)){
        this.correctAwnser = true;
      }
    }
      if(this.currentlyPlaying.awnser.toUpperCase() == this.givenAwnser.toUpperCase() || this.correctAwnser){
        this.anwserIsCorrect(team);
      }else{
        console.log("het antwoord is fout");
        this.correctAwnser = false;
        team.games.forEach(x =>{
          if(x.code == this.teamGameItem.code){
            x.status = "Failure";
            x.givenawnser = this.givenAwnser;
            x.succeded = false;
          }
        });
        this.gameLogic.setGroupInfo(team);
      }

      this.http.put<any>("pool/" + this.gameLogic.getGroupInfo().id ,this.gameLogic.getGroupInfo(), (data) =>
      {
        console.log("uitgevoerd");
        if(this.correctAwnser){
          this.correctAwnser = false;
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

  private setImage(){
    this.currentImageFile = true;
    console.log("file" + this.currentImageFile);
  }

  anwserIsCorrect(team: group){
    this.correctAwnser = true;
    console.log("het antwoord is correct");
    team.points = team.points + this.currentlyPlaying.totalpunten;
    team.games.forEach(x =>{
      if(x.code == this.teamGameItem.code){
        x.points = this.currentlyPlaying.totalpunten;
        x.status = "Succeeded";
        x.givenawnser = this.givenAwnser;
        x.succeded = true;
      }
    });
    this.gameLogic.setGroupInfo(team);
  }

  addAwnser(event: any){
    this.givenAwnser =event.target.value;
  }

  constructor(private http: HttpSercive, private router: Router){
    this.gameLogic = gameLogicService.getInstance();
    this.teamGameItem = new group_games("", "", "",0,false,"");
    this.currentlyPlaying = new game("","",0,"","","","","","-",new quizz([]),new grid_game([],[]));

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
          if(team.code == this.gameLogic.getGroupInfo().code){
            this.gameLogic.setGroupInfo(team);


    
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

      if(this.currentlyPlaying.image.endsWith('png' || 'jpg' || 'jpeg') ||this.currentlyPlaying.image.endsWith('jpg')||this.currentlyPlaying.image.endsWith('jpeg')){
        this.setImage();
      }

    }

    this.teamGameItem = new group_games(this.currentlyPlaying.name, this.currentlyPlaying.codeblad+this.currentlyPlaying.codezaal, "in Progress",0,false,"");


      if(!currentTeam.games){
        currentTeam.games = [];
      }
      currentTeam.games.push(this.teamGameItem);
      this.gameLogic.setGroupInfo(currentTeam);
  
      console.log("team");

      console.log(this.gameLogic.getGroupInfo());
  
      this.http.put<any>("pool/" + this.gameLogic.getGroupInfo().id ,this.gameLogic.getGroupInfo(), (data) =>
      {}, ()=>{});

    }
  });
}, () => {}
);
    //console.log(this.currentlyPlaying);
  }
}
