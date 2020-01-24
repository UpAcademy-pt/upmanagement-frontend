export class Account {
    'id': number;
    'userId': number;
    'age': number;
    'academies': number[];
    'academicDegree': string;
    'academicBackground': string;
    'photoLink': string;
    'mobilePhone': number;
    'linkedInAdress': string;
    'themes': number[];
    'missedDays': string;
    'nif': number;

    constructor(data?: any) {
        Object.assign(this, data);
      }
}
