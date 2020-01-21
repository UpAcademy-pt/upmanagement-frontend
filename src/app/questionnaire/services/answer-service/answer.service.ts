import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../../models/answer/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private url = 'http://localhost:8080/coreFinalProject/answer/';

  constructor(private http: HttpClient) { }

  public getAllAnswers() {
    return this.http.get(this.url);
  }

  public getAnswer(id: number) {
    return this.http.get(this.url + id);
  }

  public createAnswer(answer: Answer) {
    return this.http.post(this.url, Answer, {responseType: 'text'});
  }

  public updateAnswer( answer: Answer) {
    return this.http.put(this.url, Answer, {responseType: 'text'});
  }

  public deleteAnswer( id: number) {
    return this.http.delete(this.url + id, {responseType: 'text'});
  }





   
}
