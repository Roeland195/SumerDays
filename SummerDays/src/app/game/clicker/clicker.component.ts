import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit{
  ngOnInit(): void {
  }

  pageCounter: number;
  totalClicked: number;
  gameIsFinished: boolean;

  constructor(private route: ActivatedRoute, private router: Router){
    this.totalClicked = 345;
    this.pageCounter = 20;
    this.gameIsFinished = false;

    const interval = setInterval(() => {
      this.pageCounter--;
      if(this.pageCounter <= 0) {
        this.gameIsFinished= true;
        clearInterval(interval);
        var totalScore = Math.floor(this.totalClicked / 10)

        //save Score

        this.router.navigate(['home'])
      }
    }, 1000);
  }

   clickedPage() {
    if(this.gameIsFinished)
      return;
    this.totalClicked ++;
  }
}  