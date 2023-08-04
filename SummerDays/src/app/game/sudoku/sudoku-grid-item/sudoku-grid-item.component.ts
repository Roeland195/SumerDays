import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudoku-grid-item',
  templateUrl: './sudoku-grid-item.component.html',
  styleUrls: ['./sudoku-grid-item.component.scss']
})
export class SudokuGridItemComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() block: any | undefined;
}