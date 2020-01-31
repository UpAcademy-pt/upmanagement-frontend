import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyRoutingModule } from './dummy-routing.module';
import { DummyComponent } from './dummy.component';
import { QuestionnaireModule } from '../questionnaire/questionnaire.module';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';


@NgModule({
  declarations: [
    DummyComponent,
  ],
  imports: [
    CommonModule,
    DummyRoutingModule,
    QuestionnaireModule
  ]
})
export class DummyModule { }
