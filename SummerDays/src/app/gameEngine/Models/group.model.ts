export class group{
    public name: string;
    public code: string;
    public color: string;
    public points: number;
    public members: string[];
    public games: group_games[];
    id? :string;

    constructor(name: string, code: string, color: string, members: string[], games: group_games[], points: number){
        this.name = name;
        this.code = code;
        this.color = color;
        this.points = points;
        this.members = members;
        this.games = games;
    }
}

export class group_games{
    public name: string;
    public status: string;
    public points: number;
    public succeded: boolean;
    public code: string;

    constructor(name: string, code: string, status: string, points: number, succeded: boolean){
        this.name = name;
        this.status = status;
        this.points = points;
        this.succeded = succeded;
        this.code = code;
    }
}