export class Lesson {
    'id'?: number;
    'name': string;
    'description': string;
	'materials': number[];
	'notesIds': number[];
  
    constructor(data?: any) {
      Object.assign(this, data);
    }
}
