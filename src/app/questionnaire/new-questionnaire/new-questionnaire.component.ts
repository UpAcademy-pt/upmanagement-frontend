import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question-service/question.service';
import { Question } from '../models/question/question';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { Template } from '../models/template/template';
import { TemplateService } from '../services/template-service/template.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
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
 private academies: any = [1, 2, 3, 4, 5];
 private formandosId: any = [{ 'id': "1", 'text': "Formando 1" }, { 'id': "2", 'text': "Formando 1" }, { 'id': "3", 'text': "Formando 3" },{ 'id': "4", 'text': "Formando 4" }, { 'id': "5", 'text': "Todos" }];
 private option: string;
 private testeOption: string[]
 private customHtml: string
 private trueOrfalse: boolean[] = [];
 private choices: boolean = true;

  public addQuestion(question: Question) {
    console.log('data');
    console.log(question);
    console.log(this.b);
    this.trueOrfalse.forEach( (element, index) => {
      if (element){this.a.rightAnswer.push(index)}}); //ver se dá para fazer directamente no ngmodel

    //this.questionService.createQuestion(question).subscribe();
    if (this.b.questionList != undefined) {
      this.b.questionList.push(question);
    } else {
      this.b.questionList = [question];
    }
    console.log(this.b.questionList);
    this.a = new Question(); //ver se existe uma forma melhor
  }

  public addMoreOptions(){
    console.log(this.option)
    if(this.option != undefined && this.option != ""){
      if(this.a.options != undefined) {
      this.a.options.push(this.option);
      this.customHtml = ""
      } else {
      this.a.options = [this.option];
      this.customHtml = ""
      } 
    } else {
    this.customHtml = "erro";
  }
    this.option = "";
  
    console.log(this.a.options);
    console.log(this.a.rightAnswer)
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

  public viewStuff(){
    
  }

  ngOnInit() {
  }

}
