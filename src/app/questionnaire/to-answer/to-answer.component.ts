import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-answer',
  templateUrl: './to-answer.component.html',
  styleUrls: ['./to-answer.component.scss']
})
export class ToAnswerComponent implements OnInit {

  private questionnaireId: number;

  constructor(
    private router: Router,
    private dataRoure: ActivatedRoute
  ) {
    this.questionnaireId = this.router.getCurrentNavigation().extras.state.id; //Number(this.dataRoure.snapshot.paramMap.get('id'));
    console.log("Respondendo o questionário de id = " + this.questionnaireId);
    
   }

  ngOnInit() {
  }



}
