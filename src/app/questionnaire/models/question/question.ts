export class Question {
    'id': number;
    'question': string;
    'aType': string;
    'rightAnswer': string[] = [];
    'options': string[] = [];
    'questionnaireId': number;
    'createDate': number;
    'lastModifiedDate': number;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
