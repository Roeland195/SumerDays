import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit{
  puzzle:any [][];
  awnser:any [][];

ngOnInit(): void {
}

constructor(){
  this.puzzle = [[null,null,5,  null,9,null,  null,null,1],
                 [null,null,null,  null,null,2,  null,7,3],
                 [7,6,null,  null,null,8,  2,null,null],

                 [null,1,2,  null,null,9,  null,null,4],
                 [null,null,null,  2,null,3,  null,null,null],
                 [3,null,null,  1,null,null,  9,6,null],

                 [null,null,1,  9,null,null,  null,5,8],
                 [9,7,null,  5,null,null,  null,null,null],
                 [5,null,null,  null,3,null,  7,null,null]];

  this.awnser = [[8,2,5,  3,9,7,  6,4,1],
                 [1,9,4,  6,5,2,  8,7,3],
                 [7,6,3,  4,1,8,  2,9,5],

                 [6,1,2,  7,8,9,  5,3,4],
                 [4,5,9,  2,6,3,  1,8,7],
                 [3,8,7,  1,4,5,  9,6,2],

                 [2,3,1,  9,7,6,  4,5,8],
                 [9,7,8,  5,2,4,  3,1,6],
                 [5,4,6,  8,3,1,  7,2,9]];
}
}
