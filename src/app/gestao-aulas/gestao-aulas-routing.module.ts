import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestaoAulasComponent } from './gestao-aulas.component';
import { AulasComponent } from './aulas/aulas.component';
import { BlocoNotasComponent } from './bloco-notas/bloco-notas.component';
import { ForumComponent } from './forum/forum.component';


const routes: Routes = [
  {
    path: '',
    component: GestaoAulasComponent,
    children: [
      {
        path: '',
        component: AulasComponent,
      },
      {
        path: 'blocoNotas',
        component: BlocoNotasComponent,
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
