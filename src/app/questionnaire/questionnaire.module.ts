import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { BrowserModule } from '@angular/platform-browser';
import { QuizComponent } from './quiz/quiz.component';
import { TemplatesComponent } from './templates/templates.component';



@NgModule({
  declarations: [
    QuestionnaireComponent,
    MainComponent,
    NewQuestionnaireComponent,
    QuizComponent,
    TemplatesComponent,
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule,
  ],
  bootstrap:    [ MainComponent ]
})
export class QuestionnaireModule { }
