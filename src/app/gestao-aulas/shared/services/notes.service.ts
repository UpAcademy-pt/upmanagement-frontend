import { Injectable } from '@angular/core';
import { Note } from '../models/note/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url = 'http://localhost:8080/coreFinalProject/aulas/notes/';

  constructor(
    private http: HttpClient
  ) { }

    /**
     * create
     */
    public create(note: Note) {
      return this.http.post(this.url, note);
    }

    /**
     * getAll
     */
    public getAll() {
      return this.http.get(this.url);
    }

    /**
     * getByAccountId
     */
    public getByAccountId(id: number) {
      return this.http.get(this.url + `account/${id}`);
    }

    /**
     * update
     */
    public update(note: Note) {
      return this.http.put(this.url, note);
    }

    /**
     * delete
     */
    public delete(id: number) {
      return this.http.delete(this.url + id);
    }

    // /**
    //  * getEditionIdsByAccount
    //  */
    // public getEditionIdsByAccount(id: number) {
    //   return this.http.get('http://localhost:8080/coreFinalProject/aulas/editions/accounts/ids/' + `${id}` );
    // }
}
