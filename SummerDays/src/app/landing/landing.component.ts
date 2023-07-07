import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(){
    this.members = ["timmy", "kees", "Roeland", "Maaike","trumpet"];
  }

  members: string[];
}
