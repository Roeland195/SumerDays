import { Component, OnInit } from '@angular/core';
import { HttpSercive } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpSercive){
    //this.http.onStartpool();
  }

  ngOnInit(): void {

  }

  
  title = 'SummerDays';

}
