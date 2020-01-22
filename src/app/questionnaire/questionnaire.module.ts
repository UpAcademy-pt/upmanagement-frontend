import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';


@NgModule({
  declarations: [
    QuestionnaireComponent,
    MainComponent,
    NewQuestionnaireComponent
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule
  ]
})
export class QuestionnaireModule { }
