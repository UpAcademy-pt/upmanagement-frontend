import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire.component';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TemplatesComponent } from './templates/templates.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PendingComponent } from './pending/pending.component';
import { HistoryComponent } from './history/history.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { ToAnswerComponent } from './to-answer/to-answer.component';
import { ViewComponent } from './view/view.component';
import { EditorComponent} from './editor/editor.component'

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireComponent,
    children: [
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
        path: 'template/editor',
        component: EditorComponent
      },
      {
        path: 'pendentes',
        component: PendingComponent
      },
      {
        path: 'pendentes/responder',
        component: ToAnswerComponent
      },
      {
        path: 'estatisticas', // colocar titulo do formulario depois 
        component: StatisticsComponent
      },
      {
        path: 'historico/ver' ,
        component: ViewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
