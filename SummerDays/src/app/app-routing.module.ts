import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { QuizzComponent } from './game/quizz/quizz.component';
import { SudokuComponent } from './game/sudoku/sudoku.component';
import { ClickerComponent } from './game/clicker/clicker.component';
import { BinaryComponent } from './game/binary/binary.component';

export const routes: Routes =[
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'game', component: GameComponent},
  {path: 'quizz', component: QuizzComponent},
  {path: 'binary', component: BinaryComponent},
  {path: 'clicker', component: ClickerComponent},
  {path: 'sudoku', component: SudokuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
