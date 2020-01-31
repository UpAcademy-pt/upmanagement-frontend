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
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MaterialsComponent } from './materials/materials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesNewComponent } from './notes/notes-new/notes-new.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [GestaoAulasComponent, ForumComponent, NotesComponent, AcademiesComponent, CalendarComponent, LessonsComponent, LessonsComponent, NotesComponent, CalendarComponent, MaterialsComponent, NotesNewComponent],
  imports: [
    CommonModule,
    SharedModule,
    GestaoAulasRoutingModule,
    AccordionModule.forRoot(),
    BsDropdownModule,
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    FontAwesomeModule
    
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class GestaoAulasModule { }
