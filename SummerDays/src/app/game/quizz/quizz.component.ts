import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { quizz } from 'src/app/gameEngine/Models/quizz.model';
import { gameLogicService } from 'src/app/gameEngine/logic/gamelogic.service';
import { HttpSercive } from 'src/app/http.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent {
  gameLogic: gameLogicService;
  quizz: quizz;
  currentQuestion: number;
  pointTotal: number = 0;
  currentMusicFile: boolean = false;
  currentImageFile: boolean = false;

  constructor(private http: HttpSercive, private router: Router){
    this.gameLogic = gameLogicService.getInstance();
    this.quizz = this.refreshQuiz();
    this.currentQuestion = 0;
    this.quizz.question[this.currentQuestion].isCurrentQuestion = true;
    this.checkType();

  }

  onSubmit(){
    this.quizz = this.refreshQuiz();
    this.controlAwnser();
    if(this.noMoreQuestions()){
      this.endGame();
    }else{
      this.nextQuestion();
      console.log(this.currentImageFile);
      console.log(this.currentMusicFile);
    }
  }

  private setMusic(){
    this.currentMusicFile = true
    console.log("file" + this.currentMusicFile);
  }

  private setImage(){
    this.currentImageFile = true;
    console.log("file" + this.currentImageFile);
  }

  private refreshQuiz(): quizz{
    return this.gameLogic.getCurrentGame().quizz;
  }

  private endGame(){
    var team = this.gameLogic.getGroupInfo();
    team.points = team.points + this.pointTotal;
    team.games.forEach(x =>{
      if(x.code == this.gameLogic.getCurrentGame().codeblad+this.gameLogic.getCurrentGame().codezaal){
        x.points = this.pointTotal;
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

  private controlAwnser(){
    if(this.quizz.question[this.currentQuestion].givenAwser.isCorrect){
      this.pointTotal++;
    }
  }

  private noMoreQuestions(): boolean{
    if(this.currentQuestion+1 >= this.quizz.question.length){
      return true;
    }
    return false;
  }

  private checkType(){
    this.currentMusicFile = false;
    this.currentImageFile = false;
    if(this.quizz.question[this.currentQuestion].file.endsWith('.mp3')){
      this.setMusic();
    }
    if(this.quizz.question[this.currentQuestion].file.endsWith('png') ||this.quizz.question[this.currentQuestion].file.endsWith('jpeg') ||this.quizz.question[this.currentQuestion].file.endsWith('jpg')){
      this.setImage();
    }
    console.log(this.quizz.question[this.currentQuestion].file);
  }

  private nextQuestion(){
    console.log("volgende vraag");
    this.quizz.question[this.currentQuestion].isCurrentQuestion = false;
    this.currentQuestion++;
    this.quizz.question[this.currentQuestion].isCurrentQuestion = true;
    this.checkType();
  }

}
