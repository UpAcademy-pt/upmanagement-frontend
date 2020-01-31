import { Question } from '../question/question';
import { Answer } from '../answer/answer';

export class Questionnaire {
    'id': number;
    'questionList': Question[];
    'answerList': Answer[];
    'name': string;
    'qType': string;
    'accountId': number;
    'editPrivacy': string[];
    'viewPrivacy': string[];
    'score': number;
    'createDate': number;
    'lastModifiedDate': number;
    'lastModifiedDatestring': string;
    
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
