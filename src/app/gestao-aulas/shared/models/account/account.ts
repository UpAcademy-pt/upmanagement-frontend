export class Account {
 
    'id': number;
    'userID': number;
    'editionsDtos': any[];
    
    constructor(data?: any) {
      Object.assign(this, data);
    }
}
