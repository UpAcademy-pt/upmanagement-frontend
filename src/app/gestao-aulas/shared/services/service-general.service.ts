import { Injectable } from '@angular/core';
import { Account } from '../models/account/account';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Edition } from '../models/edition/edition';
import { Lesson } from '../models/lesson/lesson';
import { Note } from '../models/note/note';
import { ReplaySubject } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class ServiceGeneralService {

  private url ='http://localhost:8080/coreFinalProject/aulas/accounts/'

  private currentAccount: Account = new Account();
  private accountId$: ReplaySubject<number> = new ReplaySubject();
  public edtions: Edition[]=[];
  public edtions$:ReplaySubject<Edition[]> = new ReplaySubject();
 
  public lessons$:ReplaySubject<any[]> = new ReplaySubject();

  

  constructor(
    private router: Router,
    private userApi: UserServiceService,
    private http: HttpClient,
  ) { 
    this.currentAccount.userID = this.userApi.getCurrentUser().id
    this.getAccount().subscribe(
      (account: Account) => {
        this.currentAccount = account;
        this.accountId$.next(account.id);
        this.edtions$.next(account.editionsDtos);
        this.edtions = account.editionsDtos;
        
        }
      )
      
  }

  public getAccount(){
    return this.http.get(this.url + "user/" + this.currentAccount.userID)
  }

public getEditions(){
  return this.edtions$
}
/**
 * getCurrentAccountId
 */
public getCurrentAccountId() {
  return this.currentAccount.id;
}

}
