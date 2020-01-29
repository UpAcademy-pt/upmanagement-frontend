export class Question {
    'id': number;
    'question': string;
    'aType': string;
    'rightAnswer': number[] = []
    'options': string[];
    'questionnaireId': number;
    'createDate': number;
    'lastModifiedDate': number;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
