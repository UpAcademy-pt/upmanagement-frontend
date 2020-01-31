export class Note {
    'id' : number ;
    'accountId' : number;
    'editionId' ? : number;
    'lessonId' ? : number;
    'title' ? : string;
    'description' : string;


    constructor(data?: any) {
        Object.assign(this, data);
      }
}
