import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  private url = 'http://localhost:8080/coreFinalProject/aulas/editions/'

  constructor(
    private http: HttpClient
  ) { }

     /**
      * getEditionIdsByAccount
      */
     public getEditionIdsByAccount(id: number) {
       return this.http.get(this.url + `accounts/ids/${id}` );
     }
}
