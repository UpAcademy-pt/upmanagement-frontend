import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../services/account-service/account.service';
import { Account } from '../models/account/account';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {


  private account: Account;
  private history: Questionnaire[];
  public pageOfItems: Array<any>;
  // Lembrar OnDestroy()
  public filterData: string;
  // sort
  key = 'name'; // set default
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  // sort

  constructor(
    private questService: QuestionnaireService,
    private userService: UserServiceService,
    private accountService: AccountService,
    private router: Router
  ) {
    this.account = accountService.getCurrentAccount();
  }

  ngOnInit(

  ) {
    this.getQuestionnaires();
  }
  public getCurrentUser() {
    return this.userService.getCurrentUser();
  }

  public getQuestionnaires() {
    this.questService.getAnsweredQuestionnaireByAccountId(this.account.id).subscribe((history: Questionnaire[]) => {
      this.history = history; console.log(history);
      // this.showView();
    });
  }
  public showView(data: string[]) {
    // this.history.forEach(element => {
    //   element.viewPrivacy.includes(this.getCurrentUser().role);
    // })
    // this.showStatsBtn = true;

    // for (let i = 0; i < this.history.length; i++) {
    //   if (this.history[i].viewPrivacy.includes(this.getCurrentUser().role)) {
    //     this.showViewBtn[i] = true
    //   } else {
    //     this.showViewBtn[i] = false
    //   }
    //   console.log(this.showViewBtn)
    // }
    for (let i = 0; i < data.length; i++) {
      if (data[i].includes(this.getCurrentUser().role)) {
        return true;
      }
    }


  }
  public onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  public viewThisQuestionnaire(questionnaireId: number) {
    this.router.navigate(['/questionario/historico/ver'], { state: { id: questionnaireId } });
  }

  public dateChange(data: Questionnaire) {

    const teste = data.lastModifiedDate;
    const date = new Date(teste);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    let a = (`${day}/${month}/${year}`).toString();
    data.lastModifiedDatestring = a;
    return a;
  }
}


