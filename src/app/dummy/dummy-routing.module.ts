import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy.component';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';


const routes: Routes = [
  {
    path:'',
    component: DummyComponent
  },
  {
    path: 'questionario',
    component: QuestionnaireComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummyRoutingModule { }
