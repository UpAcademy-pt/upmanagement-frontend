export class Lesson {
    'id'?: number;
    'title': string;
    'description': string;
	'materialsIds': number[];
	'notesIds': number[];
  
    constructor(data?: any) {
      Object.assign(this, data);
    }
}
