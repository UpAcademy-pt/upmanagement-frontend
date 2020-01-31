import { Question } from '../question/question';

export class Template {
    'id': number;
    'name': string;
    'qType': string;
    'questionList': Question[];
    'editPrivacy': string[];
    'viewPrivacy': string[];
    'createDate': number;
    'lastModifiedDate': number;
    'formattedCreateDate': string;
    'formattedLastModifiedDate': string;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
