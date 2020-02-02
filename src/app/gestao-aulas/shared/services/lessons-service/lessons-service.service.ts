import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../../models/lesson/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsServiceService {

  private url ='http://localhost:8080/coreFinalProject/aulas/lessons/'
  constructor(
    private http: HttpClient
  ) { }


  public getLessons(){
    return this.http.get(this.url);
  }

public createLesson(lesson : Lesson){
return this.http.post(this.url, lesson);
}

public deleteById(id: number){
  return this.http.delete(this.url+ id)
}

public updateLesson(lesson: Lesson){
  return this.http.put(this.url, lesson)
}



//notas e materiais


}
