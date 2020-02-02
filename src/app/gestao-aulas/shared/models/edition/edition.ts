export class Edition {
  'id'?: number;
  'name': string;
  'type': string;
  'accountIds': number[];
  'lessonsIds': number[];
  'notesIds': number[];
  'questionsIds': number[];
  'eventsIds': number[];


  constructor(data?: any) {
    Object.assign(this, data);
  }
}
