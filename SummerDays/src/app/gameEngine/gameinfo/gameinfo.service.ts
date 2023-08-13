import { color } from "../Models/color.model";
import { game } from "../Models/game.model";
import { colum, grid_game, item } from "../Models/grid.model";
import { option, question, quizz } from "../Models/quizz.model";

export class gameInfoService{
zero: item = new item(0, false);
one: item = new item(1, false);
two: item = new item(2, false);
three: item = new item(3, false);
four: item = new item(4, false);
five: item = new item(5, false);
six: item = new item(6, false);
zeven: item = new item(7, false);
eight: item = new item(8, false);
nine: item = new item(9, false);
open: item = new item(-1, true);

colors: color[] = [
    new color("aquamarine",false),
    new color("burlywood",false),
    new color("chocolate",false),
    new color("darkkhaki",false),
    new color("darksalmon",false),
    new color("hotpink",false),
    new color("peachpuff",false),
    new color("OliveDrab",false),
    new color("deepskyblue",false),
    new color("firebrick",false)
];

games: game[] =[
    new game("Vind het juiste eiland",0 ,this.makeid(3), this.makeid(3), "", "question", "Gegroet schatzoekers, mijn naam is kapitein blackbeard, en ik heb mijn schat verstopt op een van deze eilanden. De schat vol punten kan voor jouw groep zijn, om het juiste eiland te vinden hoef je alleen meer deze simpele instructies op te volgen.het eiland dat je zoekt is naast een eiland met palmbomen. het eiland kan niet naast een eiland liggen die de zelfde zee hebben. Op het eiland groeien palmbomen.", "8",new quizz([]), new grid_game([],[])),
    new game("knots knetter gek",0 ,this.makeid(3),this.makeid(3), "", "question","Help connecters, Ik weet niet meer hoe ik dit bereken, kunnen jullie dit voor mij oplossen? Zoals hier te zien is, staat hier een kwart van een cirkel. Met daarin een rechthoek ABCD, die de rand van de cirkel raakt bij putn B. als we aannemen dan punt C het miden is van de cirkel hoelang is de diagonale lijn AD?","430",new quizz([]), new grid_game([],[])),
    new game("gezonken ship",0 ,this.makeid(3), this.makeid(3), "", "question","Ik heb hier een koraal riff kaart, met daarin een paar gezonken schepen. Ik kan alleen maar 1 keer duiken. In welk schip kan ik de punten vinden? De punten zijn de vinden in het schip waarmee je na het volgen van deze instructies oog in oog met de ochtend zon komt te staan. Loop het schip bij de voorkant uit en ga naar links, bij het eerste kruispunt die je tegenkomt ga naar rechts. Ga vervolgens nog een keer rechts bij het kruispunt daarna, kom je oog in oog met de ochtend zond.","contest",new quizz([]), new grid_game([],[])),
    new game("Broeder ruzie",0 ,this.makeid(3), this.makeid(3), "", "question","","0",new quizz([]), new grid_game([],[])),
    new game("De vijf Verdachten",0 ,this.makeid(3), this.makeid(3), "", "question","Er zijn 5 verdachten op gepakt, en de politie wilt alleen de persoon die de waarheid spreekt vrijlaten. Wie spreekt hier de waarheid. /Jaap: One of us is lying Maartje: Two of us are lying. /Rosalie: Three of us are lying/ /Arie: Four of us are lying. /Niels: All five of us aren't telling the truth.","arie",new quizz([]), new grid_game([],[])),
    new game("123...120",0 ,this.makeid(3), this.makeid(3), "", "question","Hoevaak komt het getal 1 voor als je van 0 tot en met 120 zou tellen.","52",new quizz([]), new grid_game([],[])),
    new game("Breek het scherm",0 ,this.makeid(3), this.makeid(3), "", "clicker","Je krijgt 20 seconde om ze veel mogelijk punten te scoren in dit spel","0",new quizz([]), new grid_game([],[])),
    new game("Bijbel kennis",0 ,"Q","Z", "", "quiz","Je krijgt straks een aantal vragen elke vraag is 1 punt waard.","0",
    new quizz([ new question("Welk getal staat hier? 1", [new option("1", true), new option("2", false), new option("3", false), new option("4", false)]),
                new question("Wat zie je op de foto?", [new option("kaas", true), new option("brood", false), new option("ham", false), new option("pindakaas", false)]),
                new question("Welke band is dit?", [new option("Imagine dragons", true), new option("U2", false), new option("Metallica", false), new option("Red Hot Chilli Peppers", false)]),
                new question("princes bang om schade aan te richten, dus vlugt en maakt daarmee nog meer schade?", [new option("Frozen", true), new option("Moana", false), new option("Rapunsel", false), new option("Lady and the Tramp", false)])
]), new grid_game([],[])),
    new game("Trivia Kennis",0 ,this.makeid(3), this.makeid(3), "", "quiz","Je krijgt straks een aantal vragen elke vraag is 1 punt waard.","0"
    ,new quizz([

    ]), new grid_game([],[])),
    new game("Quizz",0 ,this.makeid(3), this.makeid(3), "", "quiz","Je krijgt straks een aantal vragen elke vraag is 1 punt waard.","0",
    new quizz([

    ]), new grid_game([],[])),
    new game("Quizzzzz",0 ,this.makeid(3), this.makeid(3), "", "quiz","Je krijgt straks een aantal vragen elke vraag is 1 punt waard.","0",
    new quizz([

    ]), new grid_game([],[])),
    new game("First, Let's take a selfie",0 ,this.makeid(3), this.makeid(3), "", "foto","Maak een foto waarbij minstens 3 mensen uit je groepje een boom knuffelt.","0",new quizz([]), new grid_game([],[])),
    new game("Maak een woord",0 ,this.makeid(3), this.makeid(3), "", "foto","Je gaat met je groepje het woord Connect spellen en maakt hier foto’s van. De bedoeling is dat je iedereen in groepje terug te vinden is in een of meerdere foto’s. Verder mag je alleen je lichaam gebruiken om de letters te vormen.","0",new quizz([]), new grid_game([],[])),
    new game("Wie is boven alles",0 ,this.makeid(3), this.makeid(3), "", "foto","Maak met je groepje een piramide waar iedereen opstaat.","0",new quizz([]), new grid_game([],[])),
    new game("let it blow",0 ,this.makeid(3), this.makeid(3), "", "foto","Maak een kaartenhuis en zet deze op de foto. Er moet minimaal 7 kaarten op staan.","0",new quizz([]), new grid_game([],[])),
    new game("Blokje om",0 ,this.makeid(3), this.makeid(3), "", "question","Je krijgt een geheime boodschap en deze moet je ontcijferen.","0",new quizz([]), new grid_game([],[])),
    new game("Wat zeg je?",0 ,this.makeid(3), this.makeid(3), "", "question","Je krijgt een geheime boodschap en deze moet je ontcijferen.","0",new quizz([]), new grid_game([],[])),
    new game("Waarom is dit een ding",0 ,this.makeid(3), this.makeid(3), "", "question","Je krijgt een geheime boodschap en deze moet je ontcijferen.","0",new quizz([]), new grid_game([],[])),
    new game("Dat klopt niet",0 ,this.makeid(3), this.makeid(3), "", "zoek","Je krijgt straks een zoek de verschillen, Ga naar de spelleiders en haal de opdracht op.","0",new quizz([]), new grid_game([],[])),
    new game("There the same picture",0 ,this.makeid(3), this.makeid(3), "zoek", "zoek","Je krijgt straks een zoek de verschillen, Ga naar de spelleiders en haal de opdracht op.","0",new quizz([]), new grid_game([],[])),
    new game("It's both you're locker",0 ,this.makeid(3), this.makeid(3), "zoek", "zoek","Je krijgt straks een zoek de verschillen, Ga naar de spelleiders en haal de opdracht op.","0",new quizz([]), new grid_game([],[])),
    new game("It's the clasic question",0 ,this.makeid(3), this.makeid(3), "zoek", "tafel","Met je groepje ga je alle bijbelboeken van het nieuwe testament opnoemen. Om de opdracht te hallen moet iedereen uit je groepje bijbelboeken opnoemen. Ook moeten de bijbelboeken op volgorde opgenoemd worden. Om de opdracht te voltooien en punten te verdienen moet je bij de spelleider achterelkaar de bijbelboeken opnoemen.","0",new quizz([]), new grid_game([],[])),
    new game("What you're reading?",0 ,this.makeid(3), this.makeid(3), "", "tafel","Zoek het boek in de maneschijn en breng het bij de spelleider.","0",new quizz([]), new grid_game([],[])),
    new game("Wanted dead or alive",0 ,this.makeid(3), this.makeid(3), "", "tafel","Zoek deze knuffel.","0",new quizz([]), new grid_game([],[])),
    new game("Finding Nemo",0 ,this.makeid(3), this.makeid(3), "", "tafel","Zoek dit rendier.","0",new quizz([]), new grid_game([],[])),
    new game("Waar is het",0 ,this.makeid(3), this.makeid(3), "", "tafel","Zoek het boek pluk een roos en breng het bij de spelleider.","0",new quizz([]), new grid_game([],[])),
    new game("Elfjes",0 ,this.makeid(3), this.makeid(3), "", "tafel","Een elfje moet uit elf woorden en vijf regels bestaan. Op de eerste regel van een elfje staat slechts één woord. Op de tweede regel staan twee woorden, op derde regel drie woorden, op de vierde regel vier woorden en op de vijfde regel staat weer één woord. De laatste regel moet het gedicht samenvatten in één woord.","0",new quizz([]), new grid_game([],[])),
    new game("Gezins uitbreiding",0 ,this.makeid(3), this.makeid(3), "", "tafel","Bedenk bij elke letter uit het alfabet een naam en schrijf dit op, Wanneer je bij elke letter een naam hebt staan lever je dit in bij de spelleider.","0",new quizz([]), new grid_game([],[])),
    new game("Alfabet soep",0 ,this.makeid(3), this.makeid(3), "", "tafel","Jullie gaan met je groepje het alfabet opnoemen bij de spelleider. Je mag maar 1 letter per persoon opnoemen, als iedereen is geweest beginnen we weer van voor af aan.","0",new quizz([]), new grid_game([],[])),
    new game("Are you nuts?",0 ,this.makeid(3), this.makeid(3), "", "question","Ja ik ben nuts, tel hoeveel noten er in deze bak zitten ;)","10",new quizz([]), new grid_game([],[])),
    new game("Telt dit mee?",0 ,this.makeid(3), this.makeid(3), "", "question","Tel hoeveel .... er in deze bak zitten.","10",new quizz([]), new grid_game([],[])),
    new game("Het grote smurfen dorp",0 ,this.makeid(3), this.makeid(3), "", "tafel","Verzin voor iedereen in je groep een smurfen naam.","0",new quizz([]), new grid_game([],[])),
    new game("Computer taal",0 ,this.makeid(3), this.makeid(3), "", "binary","Je gaat straks een Binary puzzel maken, de regels van de binary puzzel staat op de volgende pagina. Success","0",new quizz([]), 
    new grid_game([ new colum([this.one,this.zero,this.zero,this.one,this.zero,this.one,this.one,this.zero]),
                    new colum([this.one,this.zero,this.one,this.zero,this.one,this.zero,this.zero,this.one]),
                    new colum([this.zero,this.one,this.one,this.zero,this.one,this.one,this.zero,this.zero]),
                    new colum([this.zero,this.one,this.zero,this.one,this.zero,this.zero,this.one,this.one]),
                    new colum([this.one,this.zero,this.one,this.one,this.zero,this.zero,this.one,this.zero]),
                    new colum([this.zero,this.one,this.zero,this.zero,this.one,this.one,this.zero,this.one]),
                    new colum([this.one,this.zero,this.one,this.zero,this.zero,this.one,this.one,this.zero]),
                    new colum([this.zero,this.one,this.zero,this.one,this.one,this.zero,this.zero,this.one]),
                ],[ 
                    new colum([this.open,this.zero,this.open,this.open,this.open,this.one,this.open,this.open]),
                    new colum([this.open,this.open,this.one,this.open,this.open,this.open,this.zero,this.open]),
                    new colum([this.open,this.one,this.one,this.open,this.one,this.open,this.zero,this.open]),
                    new colum([this.zero,this.open,this.open,this.open,this.open,this.open,this.open,this.one]),
                    new colum([this.open,this.open,this.open,this.one,this.open,this.open,this.open,this.open]),
                    new colum([this.zero,this.open,this.zero,this.open,this.open,this.one,this.open,this.one]),
                    new colum([this.open,this.open,this.open,this.zero,this.open,this.one,this.open,this.open]),
                    new colum([this.zero,this.open,this.open,this.open,this.open,this.open,this.zero,this.open])
                ])),
    new game("Stapels energie",0 ,this.makeid(3), this.makeid(3), "", "tafel","Stapel zo veel mogelijk suikerklontjes op elkaar voor punten, je mag de suikerklontjes niet naast elkaar zetten. dus je mag alleen maar omhoog stapelen. als de toren omvalt is het voorbij.","0",new quizz([]), new grid_game([],[])),
    new game("Vakantie puzzel",0 ,this.makeid(3), this.makeid(3), "", "sudoku","e gaat straks een sudoku puzzel maken, de regels voor een sudoku staan op de volgende pagina nog eens uitgelegd. Success","0",new quizz([]), 
    new grid_game([ new colum([this.eight,this.two,this.five,  this.three,this.nine,this.zeven,  this.six,this.four,this.one]),
                    new colum([this.one,this.nine,this.four,  this.six,this.five,this.two,  this.eight,this.zeven,this.three]),
                    new colum([this.zeven,this.six,this.three,  this.four,this.one,this.eight,  this.two,this.nine,this.five]),
                    new colum([this.six,this.one,this.two,  this.zeven,this.eight,this.nine,  this.five,this.three,this.four]),
                    new colum([this.four,this.five,this.nine,  this.two,this.six,this.three,  this.one,this.eight,this.zeven]),
                    new colum([this.three,this.eight,this.zeven,  this.one,this.four,this.five,  this.nine,this.six,this.two]),
                    new colum([this.two,this.three,this.one,  this.nine,this.zeven,this.six,  this.four,this.five,this.eight]),
                    new colum([this.nine,this.zeven,this.eight,  this.five,this.two,this.four,  this.three,this.one,this.six]),
                    new colum([this.five,this.four,this.six,  this.eight,this.three,this.one,  this.zeven,this.two,this.nine])
                ],[
                    new colum([this.open,this.open,this.five,  this.open,this.nine,this.open,  this.open,this.open,this.one]),
                    new colum([this.open,this.open,this.open,  this.open,this.open,this.two,  this.open,this.zeven,this.three]),
                    new colum([this.zeven,this.six,this.open,  this.open,this.open,this.eight,  this.two,this.open,this.open]),
                    new colum([this.open,this.one,this.two,  this.open,this.open,this.nine,  this.open,this.open,this.four]),
                    new colum([this.open,this.open,this.open,  this.two,this.open,this.three,  this.open,this.open,this.open]),
                    new colum([this.three,this.open,this.open,  this.one,this.open,this.open,  this.nine,this.six,this.open]),
                    new colum([this.open,this.open,this.one,  this.nine,this.open,this.open,  this.open,this.five,this.eight]),
                    new colum([this.nine,this.zeven,this.open,  this.five,this.open,this.open,  this.open,this.open,this.open]),
                    new colum([this.five,this.open,this.open,  this.open,this.three,this.open,  this.zeven,this.open,this.open])
])),
    new game("Where going to Ibiza",0 ,this.makeid(3), this.makeid(3), "", "tafel","Maak een papieren vliegtuig die kan vliegen.","0",new quizz([]), new grid_game([],[])),
    new game("Rol that dice",0 ,this.makeid(3), this.makeid(3), "", "tafel","Ja gaat bij een spelleider straks een aantal dobbelstenen rollen. namelijk een D4, D6, D8, D10, op elke rol moet je het hoogste hebben gerold wat er is. Wanneer een dobbelsteen bij de eerste keer rollen dit behaald, mag deze aan het eind gerold worden voor extra punten.","0",new quizz([]), new grid_game([],[])),
    new game("Daar kan je op rekenen",0 ,this.makeid(3), this.makeid(3), "", "tafel","Wat is 5+2*(2-3*4)","29",new quizz([]), new grid_game([],[])),
    new game("Reken daar maar niet op",0 ,this.makeid(3), this.makeid(3), "", "tafel","Wat is (2*6-8)+(24-9/3)","0",new quizz([]), new grid_game([],[])),
    new game("Alle eentjes zwemmen in het water",0 ,this.makeid(3), this.makeid(3), "", "tafel","Wat is 1+111+1*(1+1+11+1)","126",new quizz([]), new grid_game([],[])),
    ];

    private makeid(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    constructor(){}
}