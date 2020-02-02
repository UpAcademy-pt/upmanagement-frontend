import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question-service/question.service';
import { Question } from '../models/question/question';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { Template } from '../models/template/template';
import { TemplateService } from '../services/template-service/template.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { faTrash, faCheck, faEdit, faSave,faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';


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

 private currentQuestion: Question = new Question();
 private currentQuestionnaire: Questionnaire = new Questionnaire();

 private template: boolean;
 private quiz: boolean;
 private anonymous: boolean;
 private academies: any = [1, 2, 3, 4, 5];
 private traineesId: any = [{ 'id': "1", 'text': "Zé Carlos" }, { 'id': "2", 'text': "Carlota" }, { 'id': "3", 'text': "Zé das Couves" },{ 'id': "4", 'text': "Margarette" }, { 'id': "5", 'text': "Todos" }];
 private trainees: any[] = [];
 private option: string = "";
 private customHtml: string
 faTrash = faTrash;
 faCheck = faCheck;
 faEdit = faEdit;
 faSave = faSave;
 faAngleDoubleDown = faAngleDoubleDown;
 faAngleDoubleUp = faAngleDoubleUp;
 private multi: boolean = true;
 private select = "MULTIPLE";
 private rightCheck = false;



  public addMoreOptions(rightCheck: boolean){
    if(this.option != ""){
      this.currentQuestion.options.push(this.option);
      if (this.quiz) this.currentQuestion.rightAnswer.push(String(rightCheck));
      this.customHtml = "";
    } else {
    this.customHtml = "Necessário escrever resposta";
  }
  this.option = "";

  }

  public addQuestion(type: string) {
    
    //Add the type of the question
      this.currentQuestion.aType=type;

    //Add questions to the questionnaire questionList
    if (this.currentQuestionnaire.questionList != undefined) {
      this.currentQuestionnaire.questionList.push(this.currentQuestion);
    } else {
      this.currentQuestionnaire.questionList = [this.currentQuestion];
    }
    this.currentQuestion = new Question(); 

  }


  public addQuestionnaire() {

    //Change rightAnswer from boolean[] to string[] (of indexes)
    for (let i = 0; i < this.currentQuestionnaire.questionList.length; i++) {
      let element = this.currentQuestionnaire.questionList[i];
      element.rightAnswer = element.rightAnswer.map((option, index) => option == "true" ? String(index) : "false")
      .filter(option => option != "false");
    }

    //Add the type of the questionnaire
    if (this.quiz){
      this.currentQuestionnaire.qType = "QUIZ";
    } else {
      this.currentQuestionnaire.qType = "EVALUATION";
    }

    //Add answerList empty to the questionnaire
    this.currentQuestionnaire.answerList = [];
    

    // if (this.template) {
    //   this.currentQuestionnaire.template = true;
    //   this.questionnaireService.createQuestionnaire(this.currentQuestionnaire).subscribe(
    //       (msg: string) => {
    //         console.log("Id do template:")
    //         console.log(msg);
    //         this.currentQuestionnaire.templateId = Number(msg);
    //         // const questionnaireId: number = Number(msg);
    //         // this.questionnaireService.createQuestionnaireWithAccount(questionnaireId, this.trainees).subscribe();
    //         // console.log(questionnaireId);
    //         console.log(this.currentQuestionnaire)
    //       }, (error: string) => {
    //         console.log(error);
    //       });
    // } 
    
   
    //this.currentQuestionnaire.template = false

      this.questionnaireService.createQuestionnaireWithAccountId(this.currentQuestionnaire, this.template, this.trainees).subscribe(
        (msg: string) => {
              console.log(msg);
            }, (error: string) => {
              console.log(error);
            });

    this.currentQuestionnaire = new Questionnaire(); 
  }

  public viewStuff(thing){
    console.log(thing);
  }

  // public checkRightAnswer(index: number, jindex: number){
  //   return this.currentQuestionnaire.questionList[index].rightAnswer.includes(String(jindex));
  // }

  ngOnInit() {
  }

}
