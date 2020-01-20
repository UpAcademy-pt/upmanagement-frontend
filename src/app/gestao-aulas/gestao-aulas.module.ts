import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestaoAulasRoutingModule } from './gestao-aulas-routing.module';
import { ForumComponent } from './forum/forum.component';
import { BlocoNotasComponent } from './bloco-notas/bloco-notas.component';
import { AcademiasComponent } from './academias/academias.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { AulasComponent } from './aulas/aulas.component';
import { SharedModule } from './shared/shared.module';
import { GestaoAulasComponent } from './gestao-aulas.component';


@NgModule({
  declarations: [GestaoAulasComponent, ForumComponent, BlocoNotasComponent, AcademiasComponent, CalendarioComponent, AulasComponent],
  imports: [
    CommonModule,
    SharedModule,
    GestaoAulasRoutingModule
  ]
})
export class GestaoAulasModule { }
