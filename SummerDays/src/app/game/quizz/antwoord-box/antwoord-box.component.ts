import { Component, Input } from '@angular/core';
import { option } from 'src/app/gameEngine/Models/quizz.model';
import { gameLogicService } from 'src/app/gameEngine/logic/gamelogic.service';

@Component({
  selector: 'app-antwoord-box',
  templateUrl: './antwoord-box.component.html',
  styleUrls: ['./antwoord-box.component.scss']
})
export class AntwoordBoxComponent {
  gameLogic: gameLogicService;
  @Input() item: option  | undefined;

  clickAwser(){
    var game = this.gameLogic.getCurrentGame();
    var quizz = game.quizz;

    quizz.question.forEach(question =>{
      if(question.isCurrentQuestion){
        question.givenAwser = this.item ? this.item : new option("", false);
      }
    });

    this.gameLogic.setCurrentGame(game);
  }

  constructor(){this.gameLogic = gameLogicService.getInstance();}
}