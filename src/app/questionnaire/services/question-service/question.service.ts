import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/question/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url = 'http://localhost:8080/coreFinalProject/questionnaire/question/';

  constructor(
    private http: HttpClient
  ) { }

  public getAllQuestions(){
    return this.http.get(this.url);
  }

  public getQuestion(id: number){
    return this.http.get(this.url + id);
  }

  public createQuestion(question: Question) {
    console.log(question);
    return this.http.post(this.url, question, {responseType: 'text'});
  }

  public updateQuestion(question: Question) {
    return this.http.put(this.url, question, {responseType: 'text'});
  }

  public deleteQuestion(id: number) {
    return this.http.delete(this.url + id, {responseType: 'text'});
  }


}
