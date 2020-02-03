export class Lesson {
    'id'?: number;
    'editionId': number;
    'title': string;
    'description': string;
    'materialsIds': number[];

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
