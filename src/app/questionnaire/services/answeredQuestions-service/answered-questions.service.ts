import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnsweredQuestions } from '../../models/answeredQuestions/answered-questions';

@Injectable({
  providedIn: 'root'
})
export class AnsweredQuestionsService {

  private url: 'http://localhost:8080/coreFinalProject/answeredquestions/';

  constructor(
    private http: HttpClient
  ) { }

  public getAllAnsweredQuestions() {
    return this.http.get(this.url)
  }

  public getAnsweredQuestions(id: number) {
    return this.http.get(this.url + id)
  }

  public createAnsweredQuestions(data: AnsweredQuestions) {
    return this.http.post(this.url, data, { responseType: 'text' })
  }

  public updateAnsweredQuestions(data: AnsweredQuestions) {
    return this.http.put(this.url, data, { responseType: 'text' })
  }

  public deleteAnsweredQuestions(id: number) {
    return this.http.delete(this.url + id)
  }
}
