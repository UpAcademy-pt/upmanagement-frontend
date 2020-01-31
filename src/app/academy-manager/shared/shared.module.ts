import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSelectModule } from 'ngx-select-ex';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgxSelectModule
  ],
  exports: [
    FontAwesomeModule,
    NgxSelectModule
  ]
})
export class SharedModule { }
