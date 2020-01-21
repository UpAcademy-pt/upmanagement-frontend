import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestaoAulasComponent } from './gestao-aulas.component';
import { ForumComponent } from './forum/forum.component';
import { LessonsComponent } from './lessons/lessons.component';
import { NotesComponent } from './notes/notes.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  {
    path: '',
    component: GestaoAulasComponent,
    children: [
      {
        path: '',
        component: LessonsComponent,
      },
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'forum',
        component: ForumComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoAulasRoutingModule { }
