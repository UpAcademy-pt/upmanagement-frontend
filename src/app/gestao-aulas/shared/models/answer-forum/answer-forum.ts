export class AnswerForum {
    'id'?: number;
    'questionId': number;
    'nameOfUser': String;
    'answer': String;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
