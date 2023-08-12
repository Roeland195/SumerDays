import { Component } from '@angular/core';
import { gameLogicService } from '../gameEngine/logic/gamelogic.service';
import { group } from '../gameEngine/Models/group.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  gameLogic: gameLogicService;
  team: group;
  public getColor(): string{
    return this.team.color;
  }

  constructor(){
  this.gameLogic = gameLogicService.getInstance();
  this.team = this.gameLogic.getGroupInfo();
}
}
