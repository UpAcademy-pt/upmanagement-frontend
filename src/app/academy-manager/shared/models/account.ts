export class Account {
    'userId': number;
    'age': number;
    'academies': number[];
    'academicDegree': string;
    'academicBackground': string;
    'photoLink': string;
    'mobilePhone': number;
    'linkedInAdress': string;
    'themes': number[];
    'evaluations': number[];
    'missedDays': string;
    'nif': number;

    constructor(data?: any) {
        Object.assign(this, data);
      }
}
