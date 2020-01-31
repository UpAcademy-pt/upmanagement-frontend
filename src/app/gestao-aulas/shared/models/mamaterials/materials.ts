export class Materials {
  'id': number;
  'title': string;
  'type': string;
  'url': string;

  constructor(data?: any) {
    Object.assign(this, data);
  }
}
