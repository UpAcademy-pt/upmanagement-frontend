import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnsweredQuestionnaire } from '../../models/answeredQuestionnaire/answered-questionnaire';

@Injectable({
  providedIn: 'root'
})
export class AnsweredQuestionnaireService {

  private url: 'http://localhost:8080/coreFinalProject/AnsweredQuestionnaire/';

  constructor(
    private http: HttpClient
  ) { }

  public getAllAnsweredQuestionnaire() {
    return this.http.get(this.url)
  }

  public getAnsweredQuestionnaire(id: number) {
    return this.http.get(this.url + id)
  }

  public createAnsweredQuestionnaire(data: AnsweredQuestionnaire) {
    return this.http.post(this.url, data, { responseType: 'text' })
  }

  public updateAnsweredQuestionnaire(data: AnsweredQuestionnaire) {
    return this.http.put(this.url, data, { responseType: 'text' })
  }

  public deleteAnsweredQuestionnaire(id: number) {
    return this.http.delete(this.url + id)
  }
}
