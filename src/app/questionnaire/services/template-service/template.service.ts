import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Template } from '../../models/template/template';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private url = 'http://localhost:8080/coreFinalProject/questionnaire/template/';
  public templates: Template[] = [];
  public templates$: ReplaySubject<Template[]> = new ReplaySubject(1);

  constructor(
    private http: HttpClient
  ) {
  }


  public getAllTemplates() {
    return this.http.get(this.url).subscribe(
      (templateSub: Template[]) => {
        templateSub.forEach(template => {
          let dateC = new Date(template.createDate);
          template.formattedCreateDate = dateC.getDate().toString().padStart(2, '0') + "/" + (dateC.getMonth() + 1).toString().padStart(2, '0') + "/" + dateC.getFullYear();
          let dateLM = new Date(template.lastModifiedDate);
          template.formattedLastModifiedDate = dateLM.getDate().toString().padStart(2, '0') + "/" + (dateLM.getMonth() + 1).toString().padStart(2, '0') + "/" + dateLM.getFullYear();
        });
        this.templates = templateSub;
        this.templates$.next(this.templates);
      });
  }

  public getTemplate(id: number) {
    return this.http.get(this.url + id);
  }

  public createTemplate(template: Template) {
    return this.http.post(this.url, template, { responseType: 'text' });
  }

  public updateTemplate(template: Template) {
    return this.http.put(this.url, template, { responseType: 'text' });
  }

  public deleteTemplate(id: number) {
    return this.http.delete(this.url + id, { responseType: 'text' });
  }
}
