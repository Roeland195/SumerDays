import { Injectable } from "@angular/core";
import { group } from "../gameEngine/Models/group.model";
import { game } from "../gameEngine/Models/game.model";

@Injectable()
export class adminService{
    private static instance: adminService;
    selectedTeam: group = new group("","","",[],[],0);
    teams: group[] = [];
    games: game[] =[];
    filtergames: game[] = [];

    private constructor(){}

    public static getInstance(): adminService{
        if(!adminService.instance){
            adminService.instance = new adminService();
        }

        return adminService.instance;
    }

}