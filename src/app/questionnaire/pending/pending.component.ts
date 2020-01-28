import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  private pendingQuestionnaires: Questionnaire[];
  
  constructor(
    private router: Router
  ) {

    
    // Fazer getAcount à API e gravar accountId na AccountService e usar a lista de questionários pendentes aqui.

    this.pendingQuestionnaires = [{id: 1, name: "Questionário teste 1", questionList: [], answerList: [], qType: "EVALUATION", accountId: 1, editPrivacy: [], viewPrivacy: [], "score": 3},
    {id: 2, name: "Questionário teste 2", questionList: [], answerList: [], qType: "EVALUATION", accountId: 1, editPrivacy: [], viewPrivacy: [], "score": 3},
    {id: 3, name: "Questionário teste 3", questionList: [], answerList: [], qType: "EVALUATION", accountId: 1, editPrivacy: [], viewPrivacy: [], "score": 3}];
   }

  ngOnInit() {
  }

  public solveThisQuestionnaire(i: number) {
    this.router.navigate(['/questionario/pendentes/responder'], {state: {id: this.pendingQuestionnaires[i].id}});
  }

}
