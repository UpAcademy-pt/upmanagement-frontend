export class Module {

'id': number;
'evaluationIds': number[];
'themesIds': number[];
'name': string;
'teacherIds': number[];


constructor(data?: any) {
    Object.assign(this, data);
}
}


