import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AccountService } from '../shared/services/account.service';
import { DeclarationsService } from '../shared/services/declarations.service';
import {Account} from '../shared/models/account';
import { Declarations } from '../shared/models/declarations';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-declarations',
  templateUrl: './my-declarations.component.html',
  styleUrls: ['./my-declarations.component.scss']
})
export class MyDeclarationsComponent implements OnInit {

  faArrowDown = faArrowDown;

  public currentAccount: Account;
  public currentAccount$: ReplaySubject<Account>;
  public declarations: Declarations[];
  public declarations$: ReplaySubject<Declarations[]> = new ReplaySubject(1);
  

  constructor(
    private accountApi: AccountService,
    private declarationsApi: DeclarationsService
  ) {
    this.currentAccount$ = this.accountApi.currentAccount$;
    this.currentAccount$.subscribe((account) => {
      this.currentAccount = account;
      });
      console.log(this.currentAccount);
      
      this.getDeclarations();
   }

  ngOnInit() {
  }

  getDeclarations(){
    this.declarationsApi.get(this.currentAccount.id).subscribe((declarations:any) => {this.declarations = declarations;
      this.declarations$.next(this.declarations) ; console.log(this.declarations);});
  }

}
