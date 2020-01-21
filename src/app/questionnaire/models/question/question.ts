export class Question {

    'question': string;
    'aType': string;
    'rightAnswer': number;
    'options': string[];
    'role': string;
    
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
