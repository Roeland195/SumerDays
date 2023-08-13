export class grid_game{
    public awnser: colum[];
    public start_position: colum[];

    constructor(awser: colum[], start_position: colum[]){
        this.awnser = awser;
        this.start_position = start_position;
    }
}

export class colum{
    public item: item[];
    constructor(item: item[]){
        this.item = item;
    }

}

export class item{
    public number: number;
    public changeable: boolean;

    constructor(number: number, changeable: boolean){
        this.number = number;
        this.changeable = changeable;
    }

}