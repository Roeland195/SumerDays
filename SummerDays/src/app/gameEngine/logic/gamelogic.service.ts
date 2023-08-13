import { Injectable } from "@angular/core";
import { group } from "../Models/group.model";
import { game } from "../Models/game.model";
import { grid_game } from "../Models/grid.model";

@Injectable()
export class gameLogicService{
    private static instance: gameLogicService;
    private currentPlayingGame?: game;
    private curentTeam? : group;

    getCurrentGame():game{
        if(!this.currentPlayingGame){
            var retrievedObject: game = JSON.parse(localStorage.getItem('currentGame')!);
            this.currentPlayingGame = retrievedObject;
            }
            return this.currentPlayingGame!;
    }

    setCurrentGame(currentGame:game){
        this.currentPlayingGame = currentGame;
        localStorage.setItem('currentGame', JSON.stringify(currentGame));
    }

    getGroupInfo():group{
        if(!this.curentTeam){
        var retrievedObject: group = JSON.parse(localStorage.getItem('teamname')!);
        this.curentTeam = retrievedObject;
        }
        return this.curentTeam!;
    }

    setGroupInfo(curentTeam:group){
        this.curentTeam = curentTeam;
        localStorage.setItem('teamname', JSON.stringify(curentTeam));
    }

    private constructor(){}

    public static getInstance(): gameLogicService{
        if(!gameLogicService.instance){
            gameLogicService.instance = new gameLogicService();
        }

        return gameLogicService.instance;
    }

}