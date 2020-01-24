import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
/* import { ReplaySubject } from 'rxjs'; */

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:8080/coreFinalProject/academy-manager/accounts/';
  
  /* private accounts: Account[];
  public accounts$: ReplaySubject<Account[]> = new ReplaySubject(1);
*/

  constructor(
    private http: HttpClient
  ) { }

  /* public getAllAccounts() {
    this.http.get(this.url).subscribe(
      (res:any) => {
        this.accounts = res;
        this.accounts$.next(res);
      }
    );
  }
 */

  public create(account: Account) {
    return this.http.post(this.url, account, {responseType: 'text'});
  }

  public getById(id: number) {
    return this.http.get(this.url + id);
  }

  public update(account: Account) {
    return this.http.put(this.url, account, {responseType: 'text'});
  }

  public delete(id: number) {
    return this.http.delete(this.url + id);
  }

  public getByUserId(userId: number) {
    return this.http.get(this.url + 'user-id/' + userId);
  }
}
