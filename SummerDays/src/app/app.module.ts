import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { GameComponent } from './game/game.component';
import { ClickerComponent } from './game/clicker/clicker.component';
import { SudokuComponent } from './game/sudoku/sudoku.component';
import { BinaryComponent } from './game/binary/binary.component';
import { QuizzComponent } from './game/quizz/quizz.component';
import { TeammemberItemComponent } from './landing/teammember-item/teammember-item.component';
import { GameItemComponent } from './home/game-item/game-item.component';
import { BinaryGridItemComponent } from './game/binary/binary-grid-item/binary-grid-item.component';
import { SudokuGridItemComponent } from './game/sudoku/sudoku-grid-item/sudoku-grid-item.component';
import { AntwoordBoxComponent } from './game/quizz/antwoord-box/antwoord-box.component';
import { AdminComponent } from './admin/admin.component';
import { TeamItemComponent } from './admin/team-item/team-item.component';
import { GameAdminItemComponent } from './admin/game-admin-item/game-admin-item.component';
import { TeamGameItemComponent } from './admin/team-game-item/team-game-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LandingComponent,
    GameComponent,
    ClickerComponent,
    SudokuComponent,
    BinaryComponent,
    QuizzComponent,
    TeammemberItemComponent,
    GameItemComponent,
    BinaryGridItemComponent,
    SudokuGridItemComponent,
    AntwoordBoxComponent,
    AdminComponent,
    TeamItemComponent,
    GameAdminItemComponent,
    TeamGameItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
