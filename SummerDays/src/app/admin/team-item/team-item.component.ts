import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit{
ngOnInit(): void {
  
}

@Input() team: any | undefined;
@Input() index: number | undefined;
}
