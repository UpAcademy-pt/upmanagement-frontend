import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questionnaire } from '../../models/questionnaire/questionnaire';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  
  private url = 'http://localhost:8080/coreFinalProject/questionnaire/questionnaire/';
  //private currentQuestionnaire: Questionnaire;
  //public currentQuestionnaire$: ReplaySubject<Questionnaire> = new ReplaySubject(1);

  constructor(private http: HttpClient) { }

  public getAllQuestionnaires() {
    return this.http.get(this.url);
  }

  public getQuestionnaire(id: number) {
    return this.http.get(this.url + id);
  }

  public createQuestionnaire(questionnaire: Questionnaire) {
    return this.http.post(this.url, questionnaire, {responseType : 'text'});
  }

  public updateQuestionnaire(questionnaire: Questionnaire) {
    return this.http.put(this.url, questionnaire, {responseType : 'text'});
  }

  public deleteQuestionnaire(id: number) {
    return this.http.delete(this.url + id, {responseType: 'text'});
  }

  public getAnsweredQuestionnaireByAccountId(id: number) {
    return this.http.get(this.url + 'account/' + id);
  }
}
