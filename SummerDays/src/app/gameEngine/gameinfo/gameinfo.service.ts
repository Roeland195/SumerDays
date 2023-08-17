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
    new game("Schat zoekers","assets/images/schatzoeker.jpg",2 ,this.makeid(3), this.makeid(3), "", "question", "Gegroet schatzoekers, mijn naam is kapitein blackbeard, en ik heb mijn schat verstopt op een van deze eilanden. De schat vol punten kan voor jouw groep zijn, om het juiste eiland te vinden hoef je alleen meer deze simpele instructies op te volgen.het eiland dat je zoekt is naast een eiland met palmbomen. het eiland kan niet naast een eiland liggen die de zelfde zee hebben. Op het eiland groeien palmbomen.", "8",new quizz([]), new grid_game([],[])),
    new game("De rode lijn","assets/images/knots.png",3 ,this.makeid(3),this.makeid(3), "", "question","Help connecters, Ik weet niet meer hoe ik dit bereken, kunnen jullie dit voor mij oplossen? Zoals hier te zien is, staat hier een kwart van een cirkel. Met daarin een rechthoek ABCD, die de rand van de cirkel raakt bij putn B. als we aannemen dan punt C het miden is van de cirkel hoelang is de diagonale lijn AD?","430",new quizz([]), new grid_game([],[])),
    new game("Noord, Oost, Zuid, West","assets/images/shipyard.jpg",2 ,this.makeid(3), this.makeid(3), "", "question","Ik heb hier een koraal riff kaart, met daarin een paar gezonken schepen. Ik kan alleen maar 1 keer duiken. In welk schip kan ik de punten vinden? De punten zijn de vinden in het schip waarmee je na het volgen van deze instructies oog in oog met de ochtend zon komt te staan. Loop het schip bij de voorkant uit en ga naar links, bij het eerste kruispunt die je tegenkomt ga naar rechts. Ga vervolgens nog een keer rechts bij het kruispunt daarna, kom je oog in oog met de ochtend zon.","HMS Interceptor",new quizz([]), new grid_game([],[])),
    new game("Wat zullen we eten de hele vergadering lang","assets/images/hoofdkwartier.jpg",3 ,this.makeid(3), this.makeid(3), "", "question","Oh nee zes connect leiders konden tijdens de vergadering niet besluiten wat ze wilde bestellen en willen nu niet meer naast elkaar zitten om deze reden. Alle leiders kunnen voor dit spel niet overweg met de leiding direct boven en direct onder henzelf zitten. Daarnaast willen leiding 3 en 5 niet naast elkaar zitten want 3 wilde KFC halen en 5 Macdonalds. Leiding 1 is alvast gaan zitten en weigerd om op te staan, kan je ze zo neerzetten dat ze weer met elkaar aan tafel kunnen? Vul de getallen in de juiste volgorde beginnend met 1, draai met de klok mee. Bijv: 123456","136425 152463",new quizz([]), new grid_game([],[])),
    new game("I want it that way","",2 ,this.makeid(3), this.makeid(3), "", "question","Er zijn 5 verdachten op gepakt, en de politie wilt alleen de persoon die de waarheid spreekt vrijlaten. Wie spreekt hier de waarheid. /Jaap: One of us is lying Maartje: Two of us are lying. /Rosalie: Three of us are lying/ /Arie: Four of us are lying. /Niels: All five of us aren't telling the truth.","arie",new quizz([]), new grid_game([],[])),
    new game("1 tot 120","",4 ,this.makeid(3), this.makeid(3), "", "question","Hoevaak komt het getal 1 voor als je van 0 tot en met 120 zou tellen.","53",new quizz([]), new grid_game([],[])),
    new game("Breek het scherm","",0 ,this.makeid(3), this.makeid(3), "", "clicker","Je krijgt 20 seconde om ze veel mogelijk punten te scoren in dit spel","0",new quizz([]), new grid_game([],[])),
    new game("Het grote boek","",0 ,this.makeid(3),this.makeid(3), "", "quiz","Je krijgt straks een aantal vragen elke vraag is 1 punt waard.","0",
    new quizz([ new question("Met welk beest raakte Bileam in discussie?",[
                    new option("Ezel", true),
                    new option("Duif", false),
                    new option("Leeuw", false),
                    new option("Beer", false)],
                    "assets/images/discussie.jpg"),
                new question("Wat had Paulus per ongeluk bij Karpus in Troas laten liggen?",[
                    new option("Zijn Rugzak", false),
                    new option("Zijn Jas", true),
                    new option("Zijn Bijbel", false),
                    new option("Zijn Tablet", true)],
                    "assets/images/bijbel.jpg"),
                new question("Wat gebeurde er met Noach toen hij oogste uit zijn wijngaard?",[
                    new option("Hij werd boos omdat de wijn bitter was", false),
                    new option("Hij gaf een feest", false),
                    new option("Hij werd Dronken", true),
                    new option("Hij werd boos op zijn zoons", false)],
                    "assets/images/wijngaarde.png"),
                new question("Op wie of wat werd Jezus boos, en vervloekte hen/het? ",[
                    new option("Een Boom", true),
                    new option("De Farao", false),
                    new option("Judas", false),
                    new option("Een Deur", false)],
                    "assets/images/bijbel.jpg"),
                new question("Wat was de reden dat god 2 beren op een stel kinderen afstuurde, waardoor er 42 kinderen stierven? ",[
                    new option("De kinderen zaten vast in een gat", false),
                    new option("De kinderen lachte Elisa uit als kaal kop", true),
                    new option("De kinderen waren de beren al aan het uitdagen", false),
                    new option("Geen reden gegeven", false)],
                    "assets/images/bear.jpg"),
                new question("Welk boek in de Bijbel is het enige boek waarin de naam van God nooit wordt genoemd?",[
                    new option("Amos", false),
                    new option("Spreuken", false),
                    new option("Ester", true),
                    new option("Lucas", false)],
                    "assets/images/bijbel.jpg"),
                new question("Op de ark van Noach moesten er van elk onreine dier 2 mee een mannetje en vrouwtje, Hoeveel stuks moesten er mee van elk rein dier soort, en van elke vogel soort? ",[
                    new option("2", false),
                    new option("4", false),
                    new option("6", false),
                    new option("7", true)],
                    "assets/images/ark.jpeg"),
                new question("Hoe moeten we volgens Jezus onze familie behandelen?",[
                    new option("We moeten onze vader en moeder eren", false),
                    new option("We moeten ouders, broers en zusters haten", false),
                    new option("We moeten ouders, broers en zusters verlaten", false),
                    new option("Alle drie de antwoorden hierboven zijn correct", true)],
                    ""),
                new question("Hoe heet dit nummer?",[
                    new option("Het allerleukste liedje", false),
                    new option("Groter dan een berg zo hoog", false),
                    new option("Allerleukste liedje", true),
                    new option("HB 2023 Theme Song", false)],
                    "assets/music/allerleukste.mp3"),
                new question("Welke bijbelse figuren komen voor in het Wilhelmus",[
                    new option("Saul en David", true),
                    new option("Jezus en Pilatus", false),
                    new option("Mozes en Aäron", false),
                    new option("Jozef en Maria", false)],
                    "assets/music/Wilhelmus.mp3"),
]), new grid_game([],[])),
    new game("Muziek liefhebber","",0 ,this.makeid(3), this.makeid(3), "", "quiz","Je krijgt straks een aantal vragen elke vraag is 1 punt waard.","0",
    new quizz([ new question("Hoeveel nog bestaande landen komen in dit nummer voor?",[
                    new option("11", true),
                    new option("12", false),
                    new option("14", false),
                    new option("15", false)],
                    "assets/music/belgie.mp3"),
                new question("Wie is de artiest?",[
                    new option("Lynyrd Skynyrd", false),
                    new option("Barry Ryan", false),
                    new option("Cat Stevens", true),
                    new option("Neil Diamond", false)],
                    "assets/music/morning.mp3"),
                new question("Wat is de naam van dit nummer?",[
                    new option("Ik geloof", false),
                    new option("Ik geloof in jouw en mij", false),
                    new option("Een nieuwe herfst", false),
                    new option("Avond", true)],
                    "assets/music/avond.mp3"),
                new question("Uit welke Shrek film komt dit nummer?",[
                    new option("Shrek", false),
                    new option("Shrek 2", true),
                    new option("Shrek the Third", false),
                    new option("Shrek Forever After", false)],
                    "assets/music/shrek.mp3"),
                new question("Wie is de artiest?",[
                    new option("U2", false),
                    new option("Kensington", false),
                    new option("ColdPlay", true),
                    new option("R.E.M.", false)],
                    "assets/music/viva.mp3"),
                new question("In het “Smurfenlied” geschreven door Vader Abraham,  worden de smurfen ondervraagt over wat ze kunnen doen. Hoe vaak komt het woord “Smurf” voor?",[
                    new option("8", false),
                    new option("7", true),
                    new option("5", false),
                    new option("6", false)],
                    "assets/music/smurfen.mp3"),
                new question("Uit welke film komt dit nummer?",[
                    new option("Moana", true),
                    new option("Aladdin", false),
                    new option("Pocahontas", false),
                    new option("Mulan", false)],
                    "assets/music/moana.mp3"),
                new question("Wie is de artiest?",[
                    new option("Bon Jovi", true),
                    new option("The Buggles", false),
                    new option("AC/DC", false),
                    new option("Alice Cooper", false)],
                    "assets/music/love.mp3"),
                new question("Wat is de naam van dit nummer?",[
                    new option("21 Hungarian Dances", false),
                    new option("Requiem in D Minor", false),
                    new option("Ride of the Valkyries", false),
                    new option("Carmina Burana: O Fortuna", true)],
                    "assets/music/fortuna.mp3"),
                new question("Uit welke film komt dit nummer?",[
                    new option("The Da Vinci Code", false),
                    new option("Fast and Furious", true),
                    new option("Rocky", false),
                    new option("Inception", false)],
                    "assets/music/fast.mp3"),
]), new grid_game([],[])),
    new game("Weet ik veel","",0 ,this.makeid(3), this.makeid(3), "", "quiz","Je krijgt straks een aantal vragen elke vraag is 1 punt waard.","0",
    new quizz([ new question("Welk dier heeft een oorlog gewonnen tegen Australië?",[
                    new option("Kangoeroes", false),
                    new option("Emoes", true),
                    new option("Koala's", false),
                    new option("Slangen", false)],
                    "assets/images/australie.jpg"),
                new question("In welke maand vind het Duitse Oktoberfest voor het grootste deel plaats?",[
                    new option("September", true),
                    new option("November", false),
                    new option("Oktober", false),
                    new option("Augustus", false)],
                    "assets/images/oktoberfest.jpg"),
                new question("Aan wie wordt de uitspraak “Als je denkt dat je te klein bent om een verschil te maken, probeer dan eens te slapen met een mug in de kamer.” Toegeschreven?",[
                    new option("De Dalai Lama", true),
                    new option("Nelson Mandela", false),
                    new option("Barack Obama", false),
                    new option("Mark Rutte", false)],
                    "assets/images/mug.jpg"),
                new question("In de televisie show 'Wie is de mol' gaan er elk jaar een groep van 10 deel nemers opdrachten uitvoeren in het buitenland. 1 van deze mensen saboteert de boel, hij/zij staat bekend als de Mol. Wie was in Seizoen 20 de Mol?",[
                    new option("Merel Westrik", false),
                    new option("Jurre Geluk", false),
                    new option("Jeroen kijk in de Vegte", false),
                    new option("Rob Dekay", true)],
                    "assets/images/mol.jpg"),
                new question("Wat zijn de officiële namen van de twee buren uit de serie “Buurman en Buurman”?",[
                    new option("Luborír & Benes", false),
                    new option("Piet & Jorden", false),
                    new option("Tim & Tom", false),
                    new option("Pat & Mat", true)],
                    "assets/images/buurman.jpg"),
                new question("Wat is de volledige naam van de pop Barbie?",[
                    new option("Barbie Millicent", false),
                    new option("Barbara Robberts", false),
                    new option("Barbara Millicent Robberts", true),
                    new option("Barbie Robberts Millicent", false)],
                    "assets/images/barbie.jpeg"),
                new question("Wie was de gouverneur van Californië in de jaren 2003 tot 2011?",[
                    new option("Jerry Brown", false),
                    new option("Arnold Schwarzeneger", true),
                    new option("Gavin Newsom", false),
                    new option("Peter hardeman Burnett", false)],
                    "assets/images/californie.jpg"),
                new question("Wie was de eerste vrouw die een Nobelprijs won (in 1903)?",[
                    new option("Shirin Ebadi", false),
                    new option("Nadia Murad", false),
                    new option("Maria Currie", true),
                    new option("Wangari Muta Maathai", false)],
                    "assets/images/maria.jpg"),
                new question("In de eerste film van de trilogy van “Lord of the ring: The Fellowship of the Ring”. Gaan een groep mensen elves en Dwergen op pad om een ring te vernietigen. Uit hoeveel individuen bestaat deze groep?",[
                    new option("8", false),
                    new option("7", false),
                    new option("9", true),
                    new option("6", false)],
                    "assets/images/ringtafel.jpg"),
                new question("In de Fim “Monty Python and the Holy Grail” komen de characters aan bij Cave of Caerbannog, do locatie waar de Grail te vinden zou zijn. Welk dier heeft meerdere ridders vermoord bij de ingang van de grot?",[
                    new option("Kat", false),
                    new option("Konijn", true),
                    new option("Vos", false),
                    new option("Draak", false)],
                    "assets/images/monty.jpg"),

]), new grid_game([],[])),
    new game("Hier weet ik alles van","",0 ,this.makeid(3), this.makeid(3), "", "quiz","Je krijgt straks een aantal vragen elke vraag is 1 punt waard.","0",
    new quizz([ new question("Wat is de naam van dit nummer?",[ 
                    new option("Swan lake", false),
                    new option("Carmen Suite No.2", true),
                    new option("Dance of the sugar plum fairy", false),
                    new option("Ode to you", false)],
                    "assets/music/habanera.mp3"),
                new question("In Welke stad branded het Olympische vuur voor het eerst, in 1928?",[ 
                    new option("Londen", false),
                    new option("Berlijn", false),
                    new option("Parijs", false),
                    new option("Amsterdam", true)],
                    ""),
                new question("Welk Land mark zien we hier?",[
                    new option("Stonehenge", false),
                    new option("Rushmore", false),
                    new option("The Standing Stones of Callanish", true),
                    new option("Mam Tor, Peak District", false)],
                    "assets/images/stones.png"),
                new question("Ofidiofobie is de extreme angst voor welk soort dieren?",[
                    new option("Kikkers", false),
                    new option("Kameleon", false),
                    new option("Slangen", true),
                    new option("Spinnen", false)],
                    ""),
                new question("In the Show “How I met your mother” this number called “Piano Sonata No. 11” has been played whenever Barney Stinson explains something, By what phenomenon is this played?",[
                    new option("The Play book", true),
                    new option("The eight slaps bet", false),
                    new option("The Bro Code", false),
                    new option("The mystery Pineapple", false)],
                    "assets/music/playbook.mp3"),
                new question("In 2013 is dit dier door “The Huffington Post” bestempeld als het gelukkigste dier ter wereld. Wat is de naam van dit dier?",[
                    new option("Quokka", true),
                    new option("Categour", false),
                    new option("Faluar", false),
                    new option("Catorb", false)],
                    "assets/images/quokka.jpg"),
                new question("Welke achternaam komt in Nederland het meeste voor?",[ 
                    new option("Jansen", false),
                    new option("Van Delft", false),
                    new option("De Vries", false),
                    new option("De Jong", true)],
                    ""),
                new question("Uit welke film komt dit nummer?",[
                    new option("Lord of the Ring", false),
                    new option("Gladiator", true),
                    new option("Braveheart", false),
                    new option("troy", false)],
                    "assets/music/gladiator.mp3"),
                new question("Welke Brug word hier afgebeeld?",[
                    new option("Bridge of Sighs", false),
                    new option("Tyne Bridge", false),
                    new option("Millennium Bridge", false),
                    new option("Clifton Suspension Bridge", true)],
                    "assets/images/clifton.jpg"),
                new question("Hoe heet dit nummer?",[
                    new option("Won’t say goodbye anymore", false),
                    new option("Goodbye", false),
                    new option("This Love", true),
                    new option("taken it’s toll", false)],
                    "assets/music/thislove.mp3"),
]), new grid_game([],[])),




    new game("Een met de natuur","",2 ,this.makeid(3), this.makeid(3), "", "foto","Maak een foto waarbij minstens 3 mensen uit je groepje een boom knuffelt.","0",new quizz([]), new grid_game([],[])),
    new game("Walk like a eqyptian","",3 ,this.makeid(3), this.makeid(3), "", "foto","Maak met je groepje een piramide waar iedereen opstaat.","0",new quizz([]), new grid_game([],[])),
    new game("Are house, in the middle of Kerkstraat","",4 ,this.makeid(3), this.makeid(3), "", "foto","Maak een kaartenhuis en zet deze op de foto. Er moet minimaal 7 kaarten op staan.","0",new quizz([]), new grid_game([],[])),
    new game("C.O.N.N.E.C.T","",3 ,this.makeid(3), this.makeid(3), "", "foto","Je gaat met je groepje het woord Connect spellen en maakt hier foto’s van. De bedoeling is dat je iedereen in groepje terug te vinden is in een of meerdere foto’s. Verder mag je alleen je lichaam gebruiken om de letters te vormen.","0",new quizz([]), new grid_game([],[])),
    new game("Blokje om","",4 ,this.makeid(3), this.makeid(3), "", "question","Je krijgt een geheime boodschap en deze moet je ontcijferen. Haal deze op bij de spelleiders.","geniet op alle dagen van je leven die god je heeft gegeven",new quizz([]), new grid_game([],[])),
    new game("Wat zeg je?","assets/images/polybius.png",4 ,this.makeid(3), this.makeid(3), "", "question","Je krijgt een geheime boodschap en deze moet je ontcijferen. Haal deze op bij de spelleiders.","zoals gepland loopt alles anders",new quizz([]), new grid_game([],[])),
    new game("Schrijf maar wat op","assets/images/asi.png",6 ,this.makeid(3), this.makeid(3), "", "question","Je krijgt een geheime boodschap en deze moet je ontcijferen. Haal deze op bij de spelleiders.","Hallo",new quizz([]), new grid_game([],[])),
    new game("Identiek","assets/images/zoekeen.jpg",2 ,this.makeid(3), this.makeid(3), "", "zoek","Hoeveeel verschillen zitten er in deze 2 foto's.","4",new quizz([]), new grid_game([],[])),
    new game("There the same picture","assets/images/zoektwee.png",2 ,this.makeid(3), this.makeid(3), "", "zoek","Hoeveeel verschillen zitten er in deze 2 foto's.","7",new quizz([]), new grid_game([],[])),
    new game("It's both you're locker","assets/images/zoekdrie.png",2 ,this.makeid(3), this.makeid(3), "", "zoek","Hoeveeel verschillen zitten er in deze 2 foto's.","5",new quizz([]), new grid_game([],[])),
    new game("Sequals en Prequals","",3 ,this.makeid(3), this.makeid(3), "", "tafel","Met je groepje ga je alle bijbelboeken van het nieuwe testament opnoemen. Om de opdracht te hallen moet iedereen uit je groepje bijbelboeken opnoemen. Ook moeten de bijbelboeken op volgorde opgenoemd worden. Om de opdracht te voltooien en punten te verdienen moet je bij de spelleider (Maaike) achterelkaar de bijbelboeken opnoemen.","0",new quizz([]), new grid_game([],[])),
    new game("Finding love","assets/images/teddy.png",2 ,this.makeid(3), this.makeid(3), "", "tafel","Zoek deze teddie beer","0",new quizz([]), new grid_game([],[])),
    new game("In de maneschijn in e maneschijn","assets/images/maneschijn.png",3 ,this.makeid(3), this.makeid(3), "", "tafel","Zoek het boek in de manenschijn","0",new quizz([]), new grid_game([],[])),
    new game("Fellowship of the ring","assets/images/ring.jpeg",3 ,this.makeid(3), this.makeid(3), "", "tafel","Zoek de ring that rules them all","0",new quizz([]), new grid_game([],[])),
    new game("We gaan op jacht","assets/images/elk.png",2 ,this.makeid(3), this.makeid(3), "", "tafel","Zoek dit rendier","0",new quizz([]), new grid_game([],[])),
    new game("Legolas GreenLeaf","",3 ,this.makeid(3), this.makeid(3), "", "tafel","Een elfje moet uit elf woorden en vijf regels bestaan. Op de eerste regel van een elfje staat slechts één woord. Op de tweede regel staan twee woorden, op derde regel drie woorden, op de vierde regel vier woorden en op de vijfde regel staat weer één woord. De laatste regel moet het gedicht samenvatten in één woord. Om de punten te behalen roep het elfje op bij Maaike want die snapt dit.","0",new quizz([]), new grid_game([],[])),
    new game("Gezins uitbreiding","",2 ,this.makeid(3), this.makeid(3), "", "tafel","Bedenk bij elke letter uit het alfabet een naam en schrijf dit op, Wanneer je bij elke letter een naam hebt staan lever je dit in bij de spelleider.","0",new quizz([]), new grid_game([],[])),
    new game("Alfabet soep","",2 ,this.makeid(3), this.makeid(3), "", "tafel","Jullie gaan met je groepje het alfabet opnoemen bij de spelleider. Je mag maar 1 letter per persoon opnoemen, als iedereen is geweest beginnen we weer van voor af aan.","0",new quizz([]), new grid_game([],[])),
    new game("Are you nuts?","",3 ,this.makeid(3), this.makeid(3), "", "question","Tell hoeveel noten er in deze bak zitten","53",new quizz([]), new grid_game([],[])),
    new game("Notenkraker","",3 ,this.makeid(3), this.makeid(3), "", "question","Tell hoeveel noten er in deze bak zitten","46",new quizz([]), new grid_game([],[])),
    new game("Het grote smurfen dorp","",1 ,this.makeid(3), this.makeid(3), "", "tafel","Verzin voor iedereen in je groep een smurfen naam.","0",new quizz([]), new grid_game([],[])),
    new game("Biep boop boop piep","",4 ,this.makeid(3), this.makeid(3), "", "binary","Je gaat straks een Binary puzzel maken, de regels van de binary puzzel staat op de volgende pagina. Success","0",new quizz([]), 
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
    new game("Stapels energie","",0 ,this.makeid(3), this.makeid(3), "", "tafel","Stapel zo veel mogelijk suikerklontjes op elkaar voor punten, je mag de suikerklontjes niet naast elkaar zetten. dus je mag alleen maar omhoog stapelen. als de toren omvalt is het voorbij.","0",new quizz([]), new grid_game([],[])),
    new game("Vakantie puzzel","",2 ,this.makeid(3), this.makeid(3), "", "sudoku","Je gaat straks een sudoku puzzel maken, de regels voor een sudoku staan op de volgende pagina nog eens uitgelegd. Success","0",new quizz([]), 
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
    new game("Fly you fools","",2 ,this.makeid(3), this.makeid(3), "", "tafel","Maak een papieren vliegtuig die kan vliegen.","0",new quizz([]), new grid_game([],[])),
    new game("Take a change on me","",0 ,this.makeid(3), this.makeid(3), "", "tafel","Ja gaat bij een spelleider straks een aantal dobbelstenen rollen. namelijk een D4, D6, D8, D10, op elke rol moet je het hoogste hebben gerold wat er is. Wanneer een dobbelsteen bij de eerste keer rollen dit behaald, mag deze aan het eind gerold worden voor extra punten.","0",new quizz([]), new grid_game([],[])),
    new game("Reken Kracht","",2 ,this.makeid(3), this.makeid(3), "", "question","Wat is 5+2*(2-3*4)","-15",new quizz([]), new grid_game([],[])),
    new game("1 + 1 is Raampje","",2 ,this.makeid(3), this.makeid(3), "", "question","Wat is (2*6-8)+(24-9/3)","25",new quizz([]), new grid_game([],[])),
    new game("Alle eentjes zwemmen in het water","",2 ,this.makeid(3), this.makeid(3), "", "question","Wat is 1+111+1*(1+1+11+1)","126",new quizz([]), new grid_game([],[])),
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