import { Injectable } from '@angular/core';
import { QuestionForum } from '../../models/question-forum/question-forum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  private url ='http://localhost:8080/coreFinalProject/aulas/questions/'

  constructor(
    private http: HttpClient
    
  ) { }

  public getAllQuestions() {
    return this.http.get(this.url);
  }

    // public getAllQuestions(editionId : number) {
    //   return this.http.get(this.url + 'edition/' + editionId);
    // }

  public createQuestion(question: QuestionForum) {
    return this.http.post(this.url, question);
  }


  public update(question: QuestionForum) {
    return this.http.put(this.url, question);
  }

  public delete(id: number) {
    return this.http.delete(this.url + id);
  }
}
