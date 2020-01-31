import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDoubleDown, faAngleDoubleUp, faTrash, faCheck, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { Template } from '../models/template/template';
import { TemplateService } from '../services/template-service/template.service';
import { Question } from '../models/question/question';
import { Questionnaire } from '../models/questionnaire/questionnaire';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  private a: Question = new Question();
  private b: Questionnaire = new Questionnaire();

  private currentTemplate: Template;
  faAngleDoubleDown = faAngleDoubleDown;
  faAngleDoubleUp = faAngleDoubleUp;
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
  private rightCheck = false
  private teste = false
  private name: string = "Maria";

  constructor(
    private router: Router,
    private templateService: TemplateService
  ) { 
    let templateId: number = this.router.getCurrentNavigation().extras.state.id;
    this.templateService.getTemplate(templateId).subscribe(
      (currentTemplate: Template) => {
        this.currentTemplate = currentTemplate;
        console.log(this.currentTemplate);
        console.log(this.currentTemplate.name)
      });
    
  }


  ngOnInit() {
    this.fillTheTemplate()
  }
   
  public fillTheTemplate(){
    console.log("entrou");
    console.log(this.currentTemplate)
    this.b.name = this.currentTemplate.name;
  }
  
  

  
    // public sendQuestionnaire() {
    //   for (let i = 0; i < this.currentQuestionnaire.answerList.length; i++) {
    //     if (this.currentQuestionnaire.questionList[i].aType == "MULTIPLE") {
    //       this.currentQuestionnaire.answerList[i].answer = this.currentQuestionnaire.answerList[i].answer
    //         .map((option, index) => option = "true" ? "" + index : "false")
    //         .filter(option => option != "false");
    //     }
    //   }
    //   console.log("Respontas a enviar: " + JSON.stringify(this.currentQuestionnaire.answerList));
    //   this.questionnaireService.updateQuestionnaire(this.currentQuestionnaire).subscribe(
    //     (msg: string) => {
    //       console.log(msg);
    //       for (let i = 0; i < this.currentQuestionnaire.answerList.length; i++) {
    //         this.currentQuestionnaire.answerList[i].answer = [];
    //       }
    //       this.router.navigate(['/questionario/pendentes']);
    //     });
    // }
  
  }
  




