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
    SudokuGridItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
