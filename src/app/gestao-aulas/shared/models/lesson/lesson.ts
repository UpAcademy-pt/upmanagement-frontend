export class Lesson {
    'id'?: number;
    'editionId': number;
    'title': string;
    'description': string;
    'materials': number[];

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
