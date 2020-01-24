import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question-service/question.service';
import { Question } from '../models/question/question';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { Template } from '../models/template/template';
import { TemplateService } from '../services/template-service/template.service';

@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.scss']
})
export class NewQuestionnaireComponent implements OnInit {

  constructor(
    private questionService: QuestionService,
    private questionnaireService: QuestionnaireService,
    private templateService: TemplateService
  ) {}

 private a: Question = new Question();
 private b: Questionnaire = new Questionnaire();

 private template: boolean;
 private quiz: boolean;
 private anonymous: boolean;
 private option: string[]; //testar para limpar

  public addQuestion(question: Question) {
    console.log('data');
    console.log(question);
    console.log(this.b);
    this.questionService.createQuestion(question).subscribe();
    if (this.b.questionList != undefined) {
      this.b.questionList.push(question);
    } else {
      this.b.questionList = [question];
    }
    console.log(this.b.questionList);
    this.a = new Question(); //ver se existe uma forma melhor
  }

  public addMoreOptions(option: string){
    console.log(option)
    if (this.a.options != undefined) {
      this.a.options.push(option);
    } else {
      this.a.options = [option];
    }
    option = "";
  }

  public addQuestionnaire(questionnaire: Questionnaire) {

    if (this.quiz){
      this.b.qType = "QUIZ";
    } else {
      this.b.qType = "EVALUATION";
    }
    
    this.questionnaireService.createQuestionnaire(questionnaire).subscribe();

    if (this.template) {
      let c: Template = new Template(this.b);
      this.templateService.createTemplate(c).subscribe();
      console.log("template" );
      console.log(c);
    }
    console.log("questionario")
    console.log(questionnaire);

    this.b = new Questionnaire(); //ver se existe uma forma melhor
  }

  public addNewQuestionOnForm(){
    console.log("entrou")
  }

  ngOnInit() {
  }

}
