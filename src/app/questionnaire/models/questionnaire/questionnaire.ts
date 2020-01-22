export class Questionnaire {
    'questionList': string[];
    'name': string;
    'template': boolean;
    'qType': string;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
