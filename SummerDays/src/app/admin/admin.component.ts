import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpSercive } from '../http.service';
import { color } from '../gameEngine/Models/color.model';
import { group } from '../gameEngine/Models/group.model';
import { game } from '../gameEngine/Models/game.model';
import { option, question, quizz } from '../gameEngine/Models/quizz.model';
import { grid_game } from '../gameEngine/Models/grid.model';
import { gameInfoService } from '../gameEngine/gameinfo/gameinfo.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  gameInfo: gameInfoService;
  teams: group[] = [];
  games: game[] =[];


  constructor(private http: HttpSercive){
    this.gameInfo = new gameInfoService();

    this.collectTeams();
    this.collectGames();
  }

  public startGame(){
    this.gameInfo.colors.forEach(value =>{
      this.http.post<any>("colors", value, (data) =>{
      }, ()=>{});
    });

    this.createGames();
  }

  private createGames(){
    this.gameInfo.games.forEach(value =>{
      this.http.post<any>("games", value, (data) =>{
      }, ()=>{});
    });
  }

  private collectTeams(){
    this.http.get<any>("/pool")
    .pipe(
      map((responseData: {[key: string]: group}) =>
      {
        const data: group[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key))
          {
            data.push({ ...responseData[key], id: key});
          }
        }
        return data;
      })
    ).subscribe(
      (data) =>
      {
        console.log(data);
        this.teams = data.sort((a, b) => b.points - a.points);

      });
  }

  private collectGames(){
    this.http.get<any>("/games")
    .pipe(
      map((responseData: {[key: string]: game}) =>
      {
        const data: game[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key))
          {
            data.push({ ...responseData[key], id: key});
          }
        }
        return data;
      })
    ).subscribe(
      (data) =>
      {
        console.log(data);
        this.games = data;

      });
  }
}
