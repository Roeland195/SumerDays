export class quizz{
    public question: question[];
    

    constructor(question: question[]){
        this.question = question;
    }

}

export class question{
    public isCurrentQuestion: boolean;
    public givenAwser!: option;
    public options: option[];
    public query: string;

    constructor(query: string, options: option[]){
        this.options = options;
        this.query = query;
        this.isCurrentQuestion = false;
    }
}

export class option{
    public awnser: string;
    public isCorrect: boolean;

    constructor(awnser: string, isCorrect: boolean){
        this.awnser = awnser;
        this.isCorrect = isCorrect;
    }
}