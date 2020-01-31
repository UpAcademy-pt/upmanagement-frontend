export class Answer {
    'id': number;
    'questionnaireId': number;
    'answer': string[];
    'questionId': number;
    'createDate': number;
    'lastModifiedDate': number;

constructor(data?: any) {
    Object.assign(this, data);
    }
}
