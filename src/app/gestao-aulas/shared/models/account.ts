export class Account {
    'id'?: number;
    'userID': number;
    'editions': number[];
    
    constructor(data?: any) {
      Object.assign(this, data);
    }
}
