export class QuestionForum {
    'id'?: number;
    'title': String;
    'description': String;
    'editionId': number;
    'nameOfUser': String;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
