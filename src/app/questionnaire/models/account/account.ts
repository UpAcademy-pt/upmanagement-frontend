import { Questionnaire } from '../questionnaire/questionnaire';

export class Account {
    'id': number;
    'pendingQuestionnaires': Questionnaire[];

    constructor(data?: any) {
        Object.assign(this, data);
    }
    public getPending() {
        return this.pendingQuestionnaires.map(element => element.name);

    }

}
