import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap';

import { GestaoAulasRoutingModule } from './gestao-aulas-routing.module';
import { SharedModule } from './shared/shared.module';

import { GestaoAulasComponent } from './gestao-aulas.component';
import { AcademiesComponent } from './academies/academies.component';
import { ForumComponent } from './forum/forum.component';
import { LessonsComponent } from './lessons/lessons.component';
import { NotesComponent } from './notes/notes.component';
import { CalendarComponent } from './calendar/calendar.component';





@NgModule({
  declarations: [GestaoAulasComponent, ForumComponent, NotesComponent, AcademiesComponent, CalendarComponent, LessonsComponent, LessonsComponent, NotesComponent, CalendarComponent],
  imports: [
    CommonModule,
    SharedModule,
    GestaoAulasRoutingModule,
    AccordionModule.forRoot(),
    BsDropdownModule,
    BsDropdownModule.forRoot(),
    
  ]
})
export class GestaoAulasModule { }
