import { Component, OnInit, Input } from '@angular/core';
import { adminService } from '../admin.service';
import { HttpSercive } from 'src/app/http.service';
import { game } from 'src/app/gameEngine/Models/game.model';
import { group_games } from 'src/app/gameEngine/Models/group.model';

@Component({
  selector: 'app-team-game-item',
  templateUrl: './team-game-item.component.html',
  styleUrls: ['./team-game-item.component.scss']
})
export class TeamGameItemComponent implements OnInit {
  @Input() game: group_games = new group_games("","","",0,false,'');
  @Input() index: number | undefined;
  adminService: adminService;

  ngOnInit(): void {
  }

  changePoints(event: any){
    var points:number = +event.target.value;
      this.adminService.selectedTeam.points = this.adminService.selectedTeam.points - this.game.points + points;
    this.game.points = points;
    this.game.status = "Succeeded";
    this.game.succeded = true;
    this.adminService.selectedTeam;

    this.http.put<any>("pool/" + this.adminService.selectedTeam.id ,this.adminService.selectedTeam, (data) =>{
      this.adminService.games.forEach(x =>{
        if(x.codeblad+x.codezaal == this.game.code){
          var game: game = x;
          game.teamcolor = this.adminService.selectedTeam.color;
          this.http.put<any>("games/" + game.id , game, (data) =>{}, ()=>{});
        }
      });
    }, ()=>{});

    
  }

  constructor(private http: HttpSercive){
    this.adminService = adminService.getInstance();
  }
}
