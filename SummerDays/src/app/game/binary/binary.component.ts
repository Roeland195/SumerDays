import { Component, OnInit } from '@angular/core';
import { gameLogicService } from 'src/app/gameEngine/logic/gamelogic.service';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})
export class BinaryComponent implements OnInit{
  puzzle:any [][];
  awnser:any [][];

ngOnInit(): void {
}

constructor(){
  this.puzzle = [[null,0,null,null,null,1,null,null],
                 [null,null,1,null,null,null,0,null],
                 [null,1,1,null,1,null,0,null],
                 [0,null,null,null,null,null,null,1],
                 [null,null,null,1,null,null,null,null],
                 [0,null,0,null,null,1,null,1],
                 [null,null,null,0,null,1,null,null],
                 [0,null,null,null,null,null,0,null]];

  this.awnser = [[1,0,0,1,0,1,1,0],
                 [1,0,1,0,1,0,0,1],
                 [0,1,1,0,1,1,0,0],
                 [0,1,0,1,0,0,1,1],
                 [1,0,1,1,0,0,1,0],
                 [0,1,0,0,1,1,0,1],
                 [1,0,1,0,0,1,1,0],
                 [0,1,0,1,1,0,0,1]];
}
}
