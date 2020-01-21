export class Account {
    'permissions': string;
    'userId': number;
    'email': string;
    'name': string;
    
constructor (data?:any){
    Object.assign(this, data);
}

}
