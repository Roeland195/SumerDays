import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-admin-item',
  templateUrl: './game-admin-item.component.html',
  styleUrls: ['./game-admin-item.component.scss']
})
export class GameAdminItemComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() game: any | undefined;
  @Input() index: number | undefined;
}
