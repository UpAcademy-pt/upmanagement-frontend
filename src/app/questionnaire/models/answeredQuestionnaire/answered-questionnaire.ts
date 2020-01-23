import { Answer } from '../answer/answer';

export class AnsweredQuestionnaire {
    'answerList': Answer[];
    'questionnaireId': number;
    'accountId': number;
    'qtype': string;
    'date': Date;
    'score': number;

    constructor(data?: any){
        Object.assign(this, data)
    }
}
