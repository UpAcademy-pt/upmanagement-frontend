import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestaoAulasComponent } from './gestao-aulas.component';
import { ForumComponent } from './forum/forum.component';
import { LessonsComponent } from './lessons/lessons.component';
import { NotesComponent } from './notes/notes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterialsComponent } from './materials/materials.component';
import { GuardRoleGuard } from './shared/guards/guard-role.guard';


const routes: Routes = [
  {
    path: '',
    component: GestaoAulasComponent,
    canActivate:[GuardRoleGuard],
    children: [
      {
        path: '',
        component: LessonsComponent,
      },
      {
      path: 'aulas/:i',
      component: LessonsComponent
      },
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'forum/:id',
        component: ForumComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'materiais',
        component: MaterialsComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoAulasRoutingModule { }
