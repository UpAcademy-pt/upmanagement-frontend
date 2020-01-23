export class Question {
    'id': number;
    'question': string;
    'aType': string;
    'rightAnswer': number;
    'options': string[];
    'questionnaireId': number;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
