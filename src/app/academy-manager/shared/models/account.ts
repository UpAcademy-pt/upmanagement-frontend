export class Account {
    'id': number;
    'userId': number;
    'age': number;
    'academyIds': number[];
    'academicDegree': string;
    'academicBackground': string;
    'photoLink': string;
    'mobilePhone': number;
    'linkedInAdress': string;
    'themeIds': number[];
    'missedDays': string;
    'nif': number;

    constructor(data?: any) {
        Object.assign(this, data);
      }
}
