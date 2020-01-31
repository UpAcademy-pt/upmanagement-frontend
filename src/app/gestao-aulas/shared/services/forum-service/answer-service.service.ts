import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerServiceService {
  private url ='http://localhost:8080/coreFinalProject/aulas/answers/'
  constructor(
    private http: HttpClient
  ) { }

  public getAnswersByQuestionId(id : number){
return this.http.get(this.url + 'question/' + id)


  }
}
