export class Account {
    'id'?: number;
    'userID': number;
    'editions': string;
    
    constructor(data?: any) {
      Object.assign(this, data);
    }
}
