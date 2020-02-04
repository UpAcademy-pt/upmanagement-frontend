import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { UserServiceService } from '../core/services/user-service/user-service.service';
import { Account } from './models/account/account';
import { AccountService } from './services/account-service/account.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  // public mobile = false;
  // private showHide: false;
  private currentAccount: Account;

  constructor(
    private location: Location,
    private accountApi: AccountService
  ) {}

  ngOnInit() {
    // if (window.screen.width === 360) { // 768px portrait
    //   this.mobile = true;
    // }
  }

  // ngOnInit() {
  //   //this.currentAccount = this.accountApi.createAccount();
  // }

  public goBack(): void {
    this.location.back();
  }
}
