import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  constructor(){
  }

  ngOnInit(): void {
  }

  @Input() game: any | undefined;
  @Input() index: number | undefined;
}