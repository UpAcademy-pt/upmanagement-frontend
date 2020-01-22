import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:8080/coreFinalProject/accounts/';
  private accounts: Account[];
  public accounts$: ReplaySubject<Account[]> = new ReplaySubject(1);
  private students: Account[];
  public students$: ReplaySubject<Account[]> = new ReplaySubject(1);
  private teachers: Account[];
  private teachers$: ReplaySubject<Account[]> = new ReplaySubject(1);

  constructor(
    private http: HttpClient
  ) {
    this.getALllStudents();
    this.getAllTeachers();
   }

  public getAllAccounts() {
    this.http.get(this.url).subscribe(
      (res:any) => {
        this.accounts = res;
        this.accounts$.next(res);
      }
    );
  }

  public getALllStudents() {
    this.http.get(this.url + 'q?role=USER').subscribe(
      (res:any) => {
        this.students = res;
        this.students$.next(res);
        console.log(this.students);
        console.log(this.students$);
      }
    );
  }

  public getAllTeachers() {
    this.http.get(this.url + 'q?role=SUPERUSER').subscribe(
      (res:any) => {
        this.teachers = res;
        this.teachers$.next(res);
      }
    );
  }
}
