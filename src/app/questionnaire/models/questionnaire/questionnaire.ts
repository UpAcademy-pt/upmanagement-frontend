import { Question } from '../question/question';

export class Questionnaire {
    'questionList': Question[];
    'name': string;
    'template': boolean;
    'qType': string;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
