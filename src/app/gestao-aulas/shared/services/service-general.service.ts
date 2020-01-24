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
  private edtions: Edition[];

  constructor(
    private router: Router,
    private userApi: UserServiceService,
    private http: HttpClient,
  ) { 
  /*   console.log(this.userApi.currentUser$); */
    
    this.currentAccount.userID = this.userApi.getCurrentUser().id
    this.getAccount().subscribe(
      (account: Account) => {
        this.currentAccount = account;
        this.getEditions();
        }
      )
  }

  public getAccount(){
    return this.http.get(this.url + "user/" + this.currentAccount.userID)
  }


  
public getEditions(){
  return this.simulation
}

public simulation: Array<Edition> = [
  {
    'id': 1,
    'name': "java1",
    'type': "java",
    'accountIds': [],
	'lessonsIds': [],
	'notesIds': [],
	'questionsIds': [],
	'eventsIds': []
     
  }, {
    'id': 2,
    'name': 'java2',
    'type': "java",
    'accountIds': [],
	'lessonsIds': [],
	'notesIds': [],
	'questionsIds': [],
	'eventsIds': []

  }, {
    'id': 3,
    'name': 'Batatas3',
    'type': "java",
    'accountIds': [],
	'lessonsIds': [],
	'notesIds': [],
	'questionsIds': [],
	'eventsIds': []
  }, {
    'id': 4,
    'name': 'Cebolas4',
    'type': "java",
    'accountIds': [],
	'lessonsIds': [],
	'notesIds': [],
	'questionsIds': [],
	'eventsIds': []
  }
];






 
}
