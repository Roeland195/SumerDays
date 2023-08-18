import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpSercive } from '../http.service';
import { group } from '../gameEngine/Models/group.model';
import { game } from '../gameEngine/Models/game.model';
import { gameInfoService } from '../gameEngine/gameinfo/gameinfo.service';
import { adminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  adminService: adminService;
  gameInfo: gameInfoService;
  isLoggedIn: boolean = true;
  isSearching: boolean = false;

  constructor(private http: HttpSercive){
    this.adminService = adminService.getInstance();
    this.gameInfo = new gameInfoService();

    this.collectTeams();
    this.collectGames();


    const interval = setInterval(() => {
      this.collectGames();
      this.collectTeams();
      console.log("time");
    }, 15000);
  }

  public startGame(){
    this.deleteColors();
    this.deleteGames();
    this.deletePool();
    this.createColors();
    this.createGames();
  }

  search(event: any){
    this.isSearching = true;
    var searchValue : string = event.target.value;
    if(searchValue == ""){
      this.isSearching = false;
      this.adminService.filtergames = this.adminService.games;
    }else{
      this.adminService.filtergames = [];
      this.adminService.games.forEach(element => {
        if (element.name.toUpperCase().includes(searchValue.toUpperCase())){
          this.adminService.filtergames.push(element);
          console.log(this.adminService.filtergames);
        }
      });
    }
  }

  enterPassword(event: any){
    if(event.target.value == "XYZ"){
      this.isLoggedIn = true;
      this.collectTeams();
      this.collectGames();
    }

  }

  private createColors(){
        this.gameInfo.colors.forEach(value =>{
          this.http.post<any>("colors", value, (data) =>{
      }, ()=>{});
    });
  }

  private deleteColors(){
      this.http.delete<any>("colors", (data) =>{
      }, ()=>{});
  }

  private deletePool(){
      this.http.delete<any>("pool", (data) =>{
      }, ()=>{});
  }

  private createGames(){
        this.gameInfo.games.forEach(value =>{
          this.http.post<any>("games", value, (data) =>{
          }, ()=>{});
    });
  }

  private deleteGames(){
      this.http.delete<any>("games", (data) =>{
      }, ()=>{});
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
        this.adminService.teams = data.sort((a, b) => b.points - a.points);

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
        this.adminService.games = data;
        if(!this.isSearching){
        this.adminService.filtergames = data;
        }
      });
  }
}
