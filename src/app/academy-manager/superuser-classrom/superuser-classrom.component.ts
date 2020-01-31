import { Component, OnInit, Renderer2, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Posbyaccount } from '../shared/models/posbyaccount';
import { ReplaySubject } from 'rxjs';
import { AccountService } from '../shared/services/account.service';
import { HttpClient } from '@angular/common/http';
import { Account } from '../shared/models/account';
import { AcademyService } from '../shared/services/academy.service';
import { Academy } from '../shared/models/academy';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-superuser-classrom',
  templateUrl: './superuser-classrom.component.html',
  styleUrls: ['./superuser-classrom.component.scss']
})
export class SuperuserClassromComponent implements OnInit {
  public tempAccount: Account;
  public tempAccount$: ReplaySubject<Account> = new ReplaySubject(1);

  private academyAccounts: Account[];
  // public academyAccounts$: ReplaySubject<Account[]> = new ReplaySubject(1);

  private academyAccountIds: any[];
  // public academyAccounts$: ReplaySubject<any[]> = new ReplaySubject(1);

  public numRows: number;
  public numCol: number;
  private index = 0;

  public arrayPositions: any[] = [];
  public arrayPositions$: ReplaySubject<any[]> = new ReplaySubject(1);

  public tempPosAcc = new Posbyaccount();
  public tempPosAcc2 = new Posbyaccount();

  constructor(
    private renderer: Renderer2,
    private accountApi: AccountService,
    private academyApi: AcademyService,
    private userApi: UserServiceService,
    private http: HttpClient) {
    this.getAllStudents();
    this.getUserAccount();
    console.log(this.arrayPositions);
    this.arrayPositions.map(pos => {
      pos.url = this.getUserUrl();
      pos.name = this.getUserName();
    });
    this.arrayPositions$.next(this.arrayPositions)
    console.log(this.tempAccount);
  }

  ngOnInit() {
  }

  public getAllStudents() {
    this.academyApi.getbyId(1).subscribe(
      (res: Academy) => {
        this.academyAccountIds = res.studentsIds;
        this.academyAccountIds.forEach(student => this.getStudentAccounts(student));
      }
    );
  }
public getStudentAccounts(id: number){
  this.accountApi.getById(id).subscribe(
    (res: Account) => {
      this.getUser(res);   
})}

public getUser(account: Account){
  this.userApi.getUserById(account.userId).subscribe((res: User) => { this.arrayPositions.push({'pos': this.index,'account': account,'user': res});
  this.arrayPositions$.next(this.arrayPositions);
  this.index++;
  console.log(this.arrayPositions);
  
});
}



  public getUserUrl() {
    this.accountApi.getById(2).subscribe((data: any) => {
      this.tempAccount = data;
      this.getUserName();
    });
  }
  public getUserAccount() {
  }

  getUserName() {
    return "Bruno";
  }

  addRows() {
  }

  setphoto() {
  }

  public cleanElement() {
  }

}

