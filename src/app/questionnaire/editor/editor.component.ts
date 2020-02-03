import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleDown, faAngleDoubleUp, faTrash, faCheck, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { Template } from '../models/template/template';
import { TemplateService } from '../services/template-service/template.service';
import { Question } from '../models/question/question';
import { Questionnaire } from '../models/questionnaire/questionnaire';
import { QuestionnaireService } from '../services/questionnaire-service/questionnaire.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  private currentQuestion: Question = new Question();
  private b: Questionnaire = new Questionnaire();


  private currentQuestionnaire: Questionnaire = new Questionnaire();
  private template: boolean;
  private quiz: boolean;
  private anonymous: boolean;
  private academies: any = [1, 2, 3, 4, 5];
  private traineesId: any = [{ 'id': "1", 'text': "Zé Carlos" }, { 'id': "2", 'text': "Carlota" }, { 'id': "3", 'text': "Zé das Couves" },{ 'id': "4", 'text': "Margarette" }, { 'id': "5", 'text': "Todos" }];
  private trainees: any[] = [];
  private option: string = "";
  private customHtml: string
  private trueOrfalse: boolean[] = [];
  private multi: boolean = true;
  faTrash = faTrash;
  faCheck = faCheck;
  faEdit = faEdit;
  faSave = faSave;
  faAngleDoubleDown = faAngleDoubleDown;
  faAngleDoubleUp = faAngleDoubleUp;
  private rightCheck = false
  private teste = false

  constructor(
    private router: Router,
    private templateService: TemplateService,
    private questionnaireService: QuestionnaireService
  ) { 
    let templateId: number = this.router.getCurrentNavigation().extras.state.id;
    this.templateService.getTemplate(templateId).subscribe(
      (currentQuestionnaire: Questionnaire) => {
        this.currentQuestionnaire = currentQuestionnaire;
        this.currentQuestionnaire.questionList.sort( (a,b) => (a.orderNumber < b.orderNumber)? -1 : 1)
      });
  }


  ngOnInit() {

  }
  
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

      element.orderNumber = i;
    }

    //Add the type of the questionnaire
    if (this.quiz){
      this.currentQuestionnaire.qType = "QUIZ";
    } else {
      this.currentQuestionnaire.qType = "EVALUATION";
    }

    //Add answerList empty to the questionnaire
    this.currentQuestionnaire.answerList = [];
    

      this.questionnaireService.createQuestionnaireWithAccountId(this.currentQuestionnaire, this.template, this.trainees).subscribe(
        (msg: string) => {
              console.log(msg);
            }, (error: string) => {
              console.log(error);
            });

    this.currentQuestionnaire = new Questionnaire(); 
  }
  
  
  }
  




