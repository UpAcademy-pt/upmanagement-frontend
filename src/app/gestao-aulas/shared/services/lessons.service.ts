import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../models/lesson/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  private url = 'http://localhost:8080/coreFinalProject/aulas/lessons/';

  constructor(
    private http: HttpClient
  ) { }

    /**
     * create
     */
    public create(lesson: Lesson) {
      return this.http.post(this.url, lesson);
    }

    /**
     * getAll
     */
    public getAll() {
      return this.http.get(this.url);
    }

    /**
     * getLessonsByEditionId
     */
    public getLessonsByEditionId(id: number) {
      return this.http.get(this.url + `edition/${id}`);
    }

    /**
     * update
     */
    public update(lesson: Lesson) {
      return this.http.put(this.url, lesson);
    }

    /**
     * delete
     */
    public delete(id: number) {
      return this.http.delete(this.url + id);
    }
}
