export class QuestionForum {
    'id'?: number;
    'title': String;
    'description': String;
    'editionId': number;
    'nameOfUser': String;
   'answers':any [];

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
