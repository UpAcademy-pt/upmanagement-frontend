import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Question } from './models/question/question';
import { QuestionService } from './services/question-service/question.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  constructor(
    private location: Location,
    private questionService: QuestionService
  ) {}

 private a: Question = new Question();

  public addTeste(data: Question) {
    console.log('data');
    console.log(data);
    this.questionService.createQuestion(data).subscribe();
  }

  ngOnInit() {
  }

  public goBack(): void {
    this.location.back();
  }
}
