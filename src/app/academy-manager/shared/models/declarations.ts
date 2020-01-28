export class Declarations {
    'id': number;
    'accountIdSender': number;
    'accountIdReceiver': number;
    'dateSent': string;
    'dateReceived': string;
    'fileUrlSent': string;
    'fileUrlReturned': string;
    'verified': boolean;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
