import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestaoAulasComponent } from './gestao-aulas.component';
import { ForumComponent } from './forum/forum.component';
import { LessonsComponent } from './lessons/lessons.component';
import { NotesComponent } from './notes/notes.component';


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
        path: 'blocoNotas',
        component: NotesComponent,
      },
      {
        path: 'forum',
        component: ForumComponent,
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoAulasRoutingModule { }
