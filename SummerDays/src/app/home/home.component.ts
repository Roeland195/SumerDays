import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
ngOnInit(): void {
}

constructor(){
  this.games = [{"name": "Vind het juiste eiland", "color": "green",},
                {"name": "knots knetter gek", "color": "",},
                {"name": "gezonken ship", "color": "orange",},
                {"name": "Broeder ruzie", "color": "",},
                {"name": "De vijf Verdachten", "color": "green",},
                {"name": "???", "color": "red",},
                {"name": "Breek het scherm", "color": "orange",},
                {"name": "Bijbel kennis", "color": "green",},
                {"name": "Trivia Kennis", "color": "yellow",},
                {"name": "Quizz", "color": "red",},
                {"name": "Quizzzzz", "color": "yellow",},
                {"name": "First, Let's take a selfie", "color": "green",},
                {"name": "Maak een woord", "color": "red",},
                {"name": "Wie is boven alles", "color": "",},
                {"name": "let it blow", "color": "",},
                {"name": "Blokje om", "color": "",},
                {"name": "Wat zeg je?", "color": "orange",},
                {"name": "Waarom is dit een ding", "color": "red",},
                {"name": "Dat klopt niet", "color": "red",},
                {"name": "There the same picture", "color": "green",},
                {"name": "It's both you're locker", "color": "red",},
                {"name": "It's the clasic question", "color": "orange",},
                {"name": "What you're reading?", "color": "",},
                {"name": "Wanted dead or alive", "color": "yellow",},
                {"name": "Waar is het", "color": "red",},
                {"name": "Finding Nemo  of een ander voorwerp", "color": "green",},
                {"name": "Elfjes", "color": "red",},
                {"name": "Gezins uitbreiding", "color": "orange",},
                {"name": "Alfabet soep", "color": "red",},
                {"name": "Are you nuts?", "color": "",},
                {"name": "Telt dit mee?", "color": "green",},
                {"name": "Het grote smurfen dorp", "color": "red",},
                {"name": "Computer taal", "color": "red",},
                {"name": "Stapels energie", "color": "yellow",},
                {"name": "Vakantie puzzel", "color": "yellow",},
                {"name": "Where going to Ibiza", "color": "",},
                {"name": "Rol that dice", "color": "",},
                {"name": "Daar kan je op rekenen", "color": "yellow",},
                {"name": "Reken daar maar niet op", "color": "",},
                {"name": "Alle eentjes zwemmen in het water", "color": "red",}];
}

games: any;
}
