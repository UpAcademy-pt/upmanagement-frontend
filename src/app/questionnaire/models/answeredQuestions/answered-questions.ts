export class AnsweredQuestions {
    'accountId': number;
    'templateId': number;
    'type': string;

    constructor(data?: any){
        Object.assign(this, data)
    }
}
