import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'ngx-bootstrap/accordion';

import { GestaoAulasRoutingModule } from './gestao-aulas-routing.module';
import { SharedModule } from './shared/shared.module';

import { GestaoAulasComponent } from './gestao-aulas.component';
import { AcademiesComponent } from './academies/academies.component';
import { ForumComponent } from './forum/forum.component';
import { BlocoNotasComponent } from './bloco-notas/bloco-notas.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { AulasComponent } from './aulas/aulas.component';

@NgModule({
  declarations: [GestaoAulasComponent, ForumComponent, BlocoNotasComponent, AcademiesComponent, CalendarioComponent, AulasComponent],
  imports: [
    CommonModule,
    SharedModule,
    GestaoAulasRoutingModule,
    AccordionModule.forRoot(),
  ]
})
export class GestaoAulasModule { }
