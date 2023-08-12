import { grid_game } from "./grid.model";
import { quizz } from "./quizz.model";

export class game{
    public name: string;
    public codeblad: string;
    public codezaal: string;
    public type: string;
    public teamcolor: string;
    public description: string;
    public awnser: string;
    public totalpunten: number;
    public quizz: quizz;
    public grid_game: grid_game;
    id?: string;

    constructor(name: string, totalpunten: number, codeblad: string, codezaal: string, teamcolor: string, type: string, description: string, awnser: string, quizz: quizz, grid_game: grid_game){
        this.name = name;
        this.totalpunten = totalpunten;
        this.codeblad = codeblad;
        this.codezaal = codezaal;
        this.type = type;
        this.teamcolor = teamcolor;
        this.description = description;
        this.awnser = awnser;
        this.quizz = quizz;
        this.grid_game = grid_game;
    }
}