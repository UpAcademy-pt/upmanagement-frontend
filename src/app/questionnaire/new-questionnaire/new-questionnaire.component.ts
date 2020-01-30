import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question-service/question.service';
import { Question } from '../models/question/question';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { Template } from '../models/template/template';
import { TemplateService } from '../services/template-service/template.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { faTrash, faCheck, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NewQuestionnaireComponent implements OnInit {

  constructor(
    //private questionService: QuestionService,
    private questionnaireService: QuestionnaireService,
    private templateService: TemplateService
  ) {}

 private a: Question = new Question();
 private b: Questionnaire = new Questionnaire();

 private template: boolean;
 private quiz: boolean;
 private anonymous: boolean;
 private academies: any = [1, 2, 3, 4, 5];
 private traineesId: any = [{ 'id': "1", 'text': "Zé Carlos" }, { 'id': "2", 'text': "Carlota" }, { 'id': "3", 'text': "Zé das Couves" },{ 'id': "4", 'text': "Margarette" }, { 'id': "5", 'text': "Todos" }];
 private trainees: any[] = [];
 private option: string = "";
 private customHtml: string
 private trueOrfalse: boolean[] = [];
 private editOp: boolean[] = [];
 private multi: boolean = true;
 faTrash = faTrash;
 faCheck = faCheck;
 faEdit = faEdit;
 faSave = faSave;
 private rightCheck = false
 private teste = false

  public addQuestion(question: Question, type: string) {
    console.log(question);
    
    //Add the rightAnswer to the question
    this.a.rightAnswer = this.a.rightAnswer.map((option, index) => option == "true" ? String(index) : "false")
    .filter(option => option != "false");
    console.log(this.a.rightAnswer)

    //Add the type of the question
      this.a.aType=type;

    //Add questions to the questionnaire questionList
    if (this.b.questionList != undefined) {
      this.b.questionList.push(question);
    } else {
      this.b.questionList = [question];
    }
    console.log(this.b.questionList);
    this.a = new Question(); //ver se existe uma forma melhor
  }

  public addMoreOptions(rightCheck: boolean){
    console.log(this.option)
    console.log(rightCheck);
    if(this.option != ""){
      this.a.options.push(this.option);
      this.a.rightAnswer.push(String(rightCheck));
      this.customHtml = "";
    } else {
    this.customHtml = "Necessário escrever opção";
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
    this.b.answerList = [];
    
      this.questionnaireService.createQuestionnaireWithAccountId(questionnaire, this.trainees).subscribe(
        (msg: string) => {
              console.log(msg);
            }, (error: string) => {
              console.log(error);
            });
    
    
      // this.questionnaireService.createQuestionnaire(questionnaire).subscribe(
    //   (msg: string) => {
    //     console.log(msg);
    //     const questionnaireId: number = Number(msg);
    //     this.questionnaireService.createQuestionnaireWithAccount(questionnaireId, this.trainees).subscribe();
    //     console.log(questionnaireId);
    //   }, (error: string) => {
    //     console.log(error);
    //   });
    //console.log(questId);

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

  public viewStuff(thing){
    console.log(this.a.rightAnswer);
    console.log(this.a.options);
    console.log(thing);
  }


  ngOnInit() {
  }

}
