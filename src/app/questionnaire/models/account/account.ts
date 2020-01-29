import { Questionnaire } from '../questionnaire/questionnaire';

export class Account {
    'id': number;
    'pendingQuestionnaires': Questionnaire[];
    'idTeste' = 1;
    'createDate': number;
    'lastModifiedDate': number;

    constructor(data?: any) {
        Object.assign(this, data);
    }
    public getPending() {
        return this.pendingQuestionnaires.map(element => element.name);

    }

}
