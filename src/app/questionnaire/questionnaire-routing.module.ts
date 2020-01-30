import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire.component';
import { MainComponent } from './main/main.component';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TemplatesComponent } from './templates/templates.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PendingComponent } from './pending/pending.component';
import { HistoryComponent } from './history/history.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { ToAnswerComponent } from './to-answer/to-answer.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireComponent,
    children: [
      {
      path: '',
      component: MainComponent
      },
      {
        path: 'novo',
        component: NewQuestionnaireComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'historico',
        component: HistoryComponent,
      },
      {
        path: 'template',
        component: TemplatesComponent
      },
      {
        path: 'pendentes',
        component: PendingComponent
      },
      {
        path: 'pendentes/responder',
        component: ToAnswerComponent
      },
      // {
      //   path: 'historico/estatisticas', // colocar titulo do formulario depois 
      //   component: StatisticsComponent
      // },
      {
        path: 'historico/ver' ,
        component: ViewComponent
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
