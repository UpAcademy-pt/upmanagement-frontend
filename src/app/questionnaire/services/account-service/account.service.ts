import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../models/account/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url: 'http://localhost:8080/coreFinalProject/questionnaire/account/';

  constructor(
    private http: HttpClient,
  ) { }

  public getAllAccounts() {
    return this.http.get(this.url)
  }

  public getAccount(id: number){
    return this.http.get(this.url + id)
  }

  public createAccount(account: Account) {
    return this.http.post(this.url, account, {responseType: 'text'})
  }

  public updateAccount(account: Account){
    return this.http.put(this.url, account, {responseType: 'text'})
  }

  public deleteAccount(id: number){
    return this.http.delete(this.url + id)
  }
  
}
