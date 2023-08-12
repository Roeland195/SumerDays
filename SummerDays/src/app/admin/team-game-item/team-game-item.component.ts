import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-game-item',
  templateUrl: './team-game-item.component.html',
  styleUrls: ['./team-game-item.component.scss']
})
export class TeamGameItemComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() game: any | undefined;
  @Input() index: number | undefined;
}
