export class Missed {
    'id': number;
    'accountId': number;
    'data': string;
    'justified': boolean;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
