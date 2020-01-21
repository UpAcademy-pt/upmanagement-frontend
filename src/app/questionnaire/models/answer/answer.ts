import { logging } from 'protractor';

export class Answer {
    'answer': string;
    'rtype': string;
    'questionId': number;

constructor(data?: any) {
    Object.assign(this, data);
    }
}
