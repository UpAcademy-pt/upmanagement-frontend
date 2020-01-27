export class Missed {
    'accountId': number;
    'data': string;
    'justified': boolean;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
