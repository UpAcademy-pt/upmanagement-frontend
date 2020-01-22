import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Edition } from '../models/edition';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeneralService {

  private url ='http://localhost:8080/coreFinalProject/aulas/account/'

  private currentAccount: Account = new Account();
  private userApi: UserServiceService;
 /*  private edtion: Edition[] = new Edition; */

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { 
    this.currentAccount.userID = this.userApi.getCurrentUser().id
    this.getAccount().subscribe(
      (account: Account) => {
        this.currentAccount=account;
        }
      )
  }

  public getAccount(){
    return this.http.get(this.url + this.currentAccount.userID)
  }

/*   public getEditions(){
    this.
  } */
  









 
}
