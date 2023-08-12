import { grid_game } from "./grid.model";
import { quizz } from "./quizz.model";

export class color{
    public color: string;
    public taken: boolean;
    id? :string;

    constructor(color: string, taken: boolean){
        this.color = color;
        this.taken = taken;
    }
}