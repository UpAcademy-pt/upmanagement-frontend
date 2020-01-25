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

  public getAllAcademies(edNameField: string, startDateField: string, endDateField: string, clientField: string) {
    const params = new HttpParams()
    .set('edName', edNameField)
    .set('startDate', startDateField)
    .set('endDate', endDateField)
    .set('client', clientField);
    return this.http.get(this.url, {params});
  }

  public createAcademy(academy: Academy) {
    return this.http.post(this.url, academy, {responseType: 'text'});
  }
}
