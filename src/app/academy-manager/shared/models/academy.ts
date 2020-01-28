export class Academy {
    'id': number;
    'client': string;
    'startDate': string;
    'endDate': string;
    'edName': string;
    'modulesIds': number[];
    'studentsIds': number[];
    'status': string;
    'warning': string;
    'usefulInfo': string;
    'academyType': string;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}
