import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademyManagerRoutingModule } from './academy-manager-routing.module';
import { AcademyManagerComponent } from './academy-manager.component';


@NgModule({
  declarations: [AcademyManagerComponent],
  imports: [
    CommonModule,
    AcademyManagerRoutingModule
  ]
})
export class AcademyManagerModule { }
