import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Template } from '../../models/template/template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private url = 'http://localhost:8080/coreFinalProject/questionnaire/';

  constructor(private http: HttpClient) { }

  public getAllTemplates() {
    return this.http.get(this.url);
  }

  public getTemplate(id: number) {
    return this.http.get(this.url + id);
  }

  public createTemplate(template: Template) {
    return this.http.post(this.url, template, {responseType : 'text'});
  }

  public updateTemplate(template: Template) {
    return this.http.put(this.url, template, {responseType : 'text'});
  }

  public deleteTemplate(id: number) {
    return this.http.delete(this.url + id, {responseType: 'text'});
  }
}
