import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.getAllAcademies();
  }

  public getAllAcademies() {
    this.http.get(this.url).subscribe(
      (res: any) => {
        this.academies = res;
        this.academies$.next(res);
      }
    );
  }

  public createAcademy(academy: Academy) {
    return this.http.post(this.url, academy, { responseType: 'text' });
  }

  public getbyId(id: number) {

    return this.http.get(this.url + id);
  }

  public update(academy: Academy) {

    return this.http.put(this.url, academy, { responseType: 'text' });
  }

  public delete(id: number) {

    return this.http.delete(this.url + id);
  }

}
