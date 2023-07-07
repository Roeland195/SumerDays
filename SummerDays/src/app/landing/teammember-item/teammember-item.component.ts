import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teammember-item',
  templateUrl: './teammember-item.component.html',
  styleUrls: ['./teammember-item.component.scss']
})
export class TeammemberItemComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() member: string | undefined;
  @Input() index: number | undefined;
}
