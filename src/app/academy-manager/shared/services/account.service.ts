import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { ReplaySubject } from 'rxjs';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:8080/coreFinalProject/academy-manager/accounts/';
  private currentAccount: Account = new Account();
  private newAccount: Account = new Account();
  public currentAccount$: ReplaySubject<Account> = new ReplaySubject(1);
  private userId: number;
  /* private accounts: Account[];
  public accounts$: ReplaySubject<Account[]> = new ReplaySubject(1);
*/

  constructor(
    private http: HttpClient,
    private userService: UserServiceService
  ) {
    this.userId = this.userService.getCurrentUser().id;
    this.getByUserId(this.userId).subscribe((account:any) => {
      if (account === null) {
        this.newAccount.userId = this.userId;
        this.newAccount.academyIds =[];
        this.newAccount.themeIds = [];
        this.create(this.newAccount).subscribe((newAccount:any) => this.setCurrentAccount(newAccount));
      } else {
        this.setCurrentAccount(account);
      }
    });
  }

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

  public setCurrentAccount(account: Account) {
    this.currentAccount = account;
    this.currentAccount$.next(this.currentAccount);
   }
}
