import { Component, Input, OnInit } from '@angular/core';
import { game } from 'src/app/gameEngine/Models/game.model';
import { colum, item } from 'src/app/gameEngine/Models/grid.model';
import { gameLogicService } from 'src/app/gameEngine/logic/gamelogic.service';

@Component({
  selector: 'app-sudoku-grid-item',
  templateUrl: './sudoku-grid-item.component.html',
  styleUrls: ['./sudoku-grid-item.component.scss']
})
export class SudokuGridItemComponent implements OnInit {
  gameLogic: gameLogicService;
  @Input() column: colum | undefined;

  ngOnInit(): void {}

  changeNumber(item: item){
    if(item.changeable){
      item.number++;
      if(item.number == 0){item.number++}
      if(item.number > 9){
        item.number = -1;
      }
    }
    var currentGame: game = this.gameLogic.getCurrentGame();
    var playerAwnser: colum[] = currentGame.grid_game.start_position;

    playerAwnser.forEach(x =>{
      if(x == this.column){
        x = this.column;
        this.gameLogic.setCurrentGame(currentGame);
      }
    });
  }

  constructor(){this.gameLogic = gameLogicService.getInstance();}
}