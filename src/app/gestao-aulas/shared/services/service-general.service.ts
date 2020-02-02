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
  private edtions: Edition[];
  private edtions$:ReplaySubject<any> = new ReplaySubject();
  private lessons: Lesson[];
  private lessons$:ReplaySubject<any> = new ReplaySubject();

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
public getLessons(){
  return this.lessons$;
}

/**
 * getCurrentAccountId
 */
public getCurrentAccountId() {
  return this.currentAccount.id;
}

// public getNotes () {
//   return this.simulationNotes;
// }

public simulation: Array<Edition> = [
  {
    'id': 1,
    'name': "java1",
    'type': "java",
    'accountIds': [],
	'lessonsDtos': []
     
  }, {
    'id': 2,
    'name': 'java2',
    'type': "java",
    'accountIds': [],
    'lessonsDtos': []

  }, {
    'id': 3,
    'name': 'Batatas3',
    'type': "java",
    'accountIds': [],
		'lessonsDtos': []
  }, {
    'id': 4,
    'name': 'Cebolas4',
    'type': "java",
    'accountIds': [],
    'lessonsDtos': []
  }
];

// public simulationLessons: Array<Lesson> = [
//   {
//   'id': 1,
//   'editionId' : 1,
//   'title': "html",
//   'description': " ola coisas",
// 	'materials': [1,2],
// 	//'notesIds': [1,2],
     
//   }, {
//     'id': 2,
//     'editionId' : 1,
//     'title': "css",
//     'description': " ainda mal estamos ca",
//     'materials': [1,2],
//     //'notesIds': [1,2],

//   }, {
//     'id': 3,
//     'editionId' : 2,
//     'title': "java",
//     'description': " ainda ca estou",
//     'materials': [1,2],
//    // 'notesIds': [1,2],
//   }, {
//     'id': 4,
//     'editionId' : 3,
//     'title': "angular",
//     'description': " adeus",
//     'materials': [1,2],
//     //'notesIds': [1,2],
//   }
//];
}
