import { Lesson } from '../lesson/lesson';

export class Edition {
    'id'?: number;
    'name': string;
    'type': string;
    'accountIds': number[];
	  'lessonsDtos': Lesson[];

    constructor(data?: any) {
      Object.assign(this, data);
    }
}
