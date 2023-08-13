import { Component, Input, OnInit } from '@angular/core';
import { adminService } from '../admin.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit{
  @Input() team: any | undefined;
  @Input() index: number | undefined;
  adminService: adminService;
ngOnInit(): void {
  
}
constructor(){
  this.adminService = adminService.getInstance();
}

teamSelect(){
  this.adminService.selectedTeam = this.team;
}
}
