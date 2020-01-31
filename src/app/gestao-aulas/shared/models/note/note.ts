export class Note {
    'id' : number ;
    'idAccount' : number;
    'idEdition' ? : number;
    'idLesson' ? : number;
    'title' ? : string;
    'description' : string;
    'createDate' : string;

    constructor(data?: any) {
        Object.assign(this, data);
      }
}
