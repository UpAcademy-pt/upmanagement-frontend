export class Questionnaire {
    'questionList': string[];
    'name': string;
    'template': boolean;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
