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
    this.pendingQuestionnaires = [{id: 1, name: "Questionário teste 1", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 2, name: "Questionário teste 2", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 3, name: "Questionário teste 3", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 4, name: "Questionário teste 4", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 5, name: "Questionário teste 5", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 6, name: "Questionário teste 6", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 3, name: "Questionário teste 3", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 4, name: "Questionário teste 4", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 5, name: "Questionário teste 5", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 6, name: "Questionário teste 6", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []},
    {id: 6, name: "Questionário teste 6", questionList: [], qType: "EVALUATION", accountIdList: [], editPrivacy: [], viewPrivacy: []}];
   }

  ngOnInit() {
  }

  public solveThisQuestionnaire(i: number) {
    console.log("Resolver questionário de id = " + this.pendingQuestionnaires[i].id);
    this.router.navigate(['/questionario/responder'], {state: {id: this.pendingQuestionnaires[i].id}});
  }

}
