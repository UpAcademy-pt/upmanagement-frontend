import { Theme } from './theme';

export class Module {

'id': number;
'evaluationIds': number[];
'themes': Theme[];
'name': string;


constructor(data?: any) {
    Object.assign(this, data);
}
}


