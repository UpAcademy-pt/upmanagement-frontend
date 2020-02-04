import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question-service/question.service';
import { Question } from '../models/question/question';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { Template } from '../models/template/template';
import { TemplateService } from '../services/template-service/template.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { faTrash, faCheck, faEdit, faSave,faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';


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
    private templateService: TemplateService,
    private toastr: ToastrService
  ) {}

 private currentQuestion: Question = new Question();
 private currentQuestionnaire: Questionnaire = new Questionnaire();

 private template: boolean;
 private quiz: boolean;
 private anonymous: boolean;
 private academies: any = [1, 2, 3, 4, 5];
 private traineesId: any = [{ 'id': "1", 'text': "Zé Carlos" }, { 'id': "2", 'text': "Carlota" }, { 'id': "3", 'text': "Zé das Couves" },{ 'id': "4", 'text': "Margarette" }, { 'id': "5", 'text': "Todos" }];
 private trainees: any[] = [];
 private roles = [{'role': "ADMIN", 'display': "Admin" }, {'role': "SUPERUSER", 'display': "Formador" }, {'role': "USER", display: "Formando" },]
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
 private isOpenDate = true;
//  private customNumberBegin: number;
//  private customNumberEnd: number;


  

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

  public addCustomOptions(begin: number, end: number){

  if (begin == null || begin == undefined || begin < 0 || begin > 99){
    this.customHtml = "Selecione um número inicial entre 0 e 99";
  } else if (end == null || end == undefined || end < 1 || end > 100){
    this.customHtml = "Selecione um número final entre 1 e 100";
  } else {
    this.customHtml = "";
    for (let index = begin; index <= end; index++) {
      this.currentQuestion.options.push(String(index));
    }
  }

}

  public addQuestion(type: string) {
    
    if (this.currentQuestion.question == "" || this.currentQuestion.question == undefined){
      return this.customHtml = "Necessário escrever questão";
    }

    //Add the type of the question
      this.currentQuestion.aType=type;

    //Add questions to the questionnaire questionList
    if (this.currentQuestionnaire.questionList != undefined) {
      this.currentQuestionnaire.questionList.push(this.currentQuestion);
    } else {
      this.currentQuestionnaire.questionList = [this.currentQuestion];
    }
    this.currentQuestion = new Question(); 
    this.customHtml = "";
  }


  public addQuestionnaire() {

    console.log(this.currentQuestionnaire)
    //Change rightAnswer from boolean[] to string[] (of indexes)
    for (let i = 0; i < this.currentQuestionnaire.questionList.length; i++) {
      let element = this.currentQuestionnaire.questionList[i];
      element.rightAnswer = element.rightAnswer.map((option, index) => option == "true" ? String(index) : "false")
      .filter(option => option != "false");

      element.orderNumber = i + 1;
    }

    //Add the type of the questionnaire
    if (this.quiz){
      this.currentQuestionnaire.qType = "QUIZ";
    } else {
      this.currentQuestionnaire.qType = "EVALUATION";
    }

    //Add answerList empty to the questionnaire
    this.currentQuestionnaire.answerList = [];
    

    //Editar a privacidade

    for (let index = 0; index < this.currentQuestionnaire.editPrivacy.length; index++) {
      this.currentQuestionnaire.editPrivacy[index] = this.currentQuestionnaire.editPrivacy[index].role      
    }

    for (let index = 0; index < this.currentQuestionnaire.viewPrivacy.length; index++) {
      this.currentQuestionnaire.viewPrivacy[index] = this.currentQuestionnaire.viewPrivacy[index].role      
    }


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
              this.showToastSuccess("Questionário enviado com sucesso");
            }, (error: string) => {
              console.log(error);
              this.showToastErro("Falha no envio do questionário");
            });

    this.currentQuestionnaire = new Questionnaire(); 
  }

  public viewStuff(){
    //console.log(this.viewPrivacy);
  }

  // public checkRightAnswer(index: number, jindex: number){
  //   return this.currentQuestionnaire.questionList[index].rightAnswer.includes(String(jindex));
  // }

  ngOnInit() {
  }

  showToastSuccess(msg: string) {
    this.toastr.success(msg, 'Sucesso', {timeOut: 3000});
  }

  showToastErro(msg: string) {
    this.toastr.warning(msg, 'Erro', {timeOut: 3000});
  }

}
