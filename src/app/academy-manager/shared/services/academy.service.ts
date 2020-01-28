import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Academy } from '../models/academy';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademyService {

  private url = 'http://localhost:8080/coreFinalProject/academy-manager/academies/';
  private academies: Academy[];
  public academies$: ReplaySubject<Academy[]> = new ReplaySubject(1);

  constructor(
    private http: HttpClient
  ) {
    this.academies$.next(new Array<Academy>());
  }

  public getAllAcademies() {
    return this.http.get(this.url);
  }

  public createAcademy(academy: Academy) {
    return this.http.post(this.url, academy);
  }

  public getbyId(id: number) {
    return this.http.get(this.url + id);
  }

  public updateAcademy(academy: Academy) {
    return this.http.put(this.url, academy);
  }

  public deleteAcademy(id: number) {
    return this.http.delete(this.url + id);
  }

}
