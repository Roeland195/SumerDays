import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { colum } from 'src/app/gameEngine/Models/grid.model';
import { gameLogicService } from 'src/app/gameEngine/logic/gamelogic.service';
import { HttpSercive } from 'src/app/http.service';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})
export class BinaryComponent implements OnInit{
  gameLogic: gameLogicService;
  puzzle: colum[];
  awnser: colum[];

ngOnInit(): void {
}

constructor(private http: HttpSercive, private router: Router){
  this.gameLogic = gameLogicService.getInstance();
  var binaryGame = this.gameLogic.getCurrentGame();
  this.puzzle = binaryGame.grid_game.start_position;

  this.awnser = binaryGame.grid_game.awnser;

  console.log(this.awnser);
}

saveSolution(){
  var awnser = this.gameLogic.getCurrentGame().grid_game.awnser;
  var playerAwnser = this.gameLogic.getCurrentGame().grid_game.start_position;

  var isSolved: boolean = true;
  
  var columnLocation: number = 0;
  awnser.forEach(column =>{
    var itemLocation: number =0;
    column.item.forEach(item =>{
      if(item.number != playerAwnser[columnLocation].item[itemLocation].number){
        console.log("column: " + columnLocation + " /item: " + itemLocation);
        isSolved = false;
      }
      itemLocation++;
    });
    columnLocation++;
  });

  var team = this.gameLogic.getGroupInfo();

  if(isSolved){
    console.log("de puzzle is correct");
    //geef punten save score
    team.points = team.points + this.gameLogic.getCurrentGame().totalpunten;
    team.games.forEach(x =>{
      if(x.code == this.gameLogic.getCurrentGame().codeblad+this.gameLogic.getCurrentGame().codezaal){
        x.points = this.gameLogic.getCurrentGame().totalpunten;
        x.status = "Succeeded";
        x.succeded = true;
      }
    });

  }else{
    //save score
    team.games.forEach(x =>{
      if(x.code == this.gameLogic.getCurrentGame().codeblad+this.gameLogic.getCurrentGame().codezaal){
        x.status = "Failure";
        x.succeded = false;
      }
    });
  }
  //ga naan home
  this.gameLogic.setGroupInfo(team);
  this.http.put<any>("pool/" + this.gameLogic.getGroupInfo().id ,this.gameLogic.getGroupInfo(), (data) =>{
    var game = this.gameLogic.getCurrentGame();
    game.teamcolor = team.color;
    console.log(game);
    this.http.put<any>("games/" + game.id , game, (data) =>
   {this.router.navigate(['home']);}, ()=>{});
  }, ()=>{});
  }
}
