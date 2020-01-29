import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports:[
    FontAwesomeModule
  ]
})
export class SharedModule { }
