export class Answer {
    'id': number;
    'answeredquestionnaireId': number;
    'answer': string;
    'questionId': number;

constructor(data?: any) {
    Object.assign(this, data);
    }
}
