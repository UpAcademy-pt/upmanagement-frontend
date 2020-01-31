export class Account {
    'id': number;
    'userID': number;
    'editions': any[];
    
    constructor(data?: any) {
      Object.assign(this, data);
    }
}
