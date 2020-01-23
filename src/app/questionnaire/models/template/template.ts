import { Question } from '../question/question';

export class Template {
    'id': number;
    'name': string;
    'qType': string;
    'questionList': Question[];
    'editPrivacy': string[];
    'viewPrivacy': string[];

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
