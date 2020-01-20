import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestaoAulasComponent } from './gestao-aulas.component';


const routes: Routes = [
  {
    path: '',
    component: GestaoAulasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoAulasRoutingModule { }
