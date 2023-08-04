import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-binary-grid-item',
  templateUrl: './binary-grid-item.component.html',
  styleUrls: ['./binary-grid-item.component.scss']
})
export class BinaryGridItemComponent  implements OnInit {
  constructor(){
  }

  ngOnInit(): void {
  }

  @Input() block: any | undefined;
}
