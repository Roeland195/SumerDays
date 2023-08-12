export class quizz{
    public question: question[];
    public image: string;

    constructor(question: question[], image: string){
        this.question = question;
        this.image = image;
    }

}

export class question{
    public awnser: option;
    public options: option[];

    constructor(awnser: option, options: option[]){
        this.awnser = awnser;
        this.options = options;
    }
}

export class option{
    public awnser: string;

    constructor(awnser: string){
        this.awnser = awnser;
    }
}