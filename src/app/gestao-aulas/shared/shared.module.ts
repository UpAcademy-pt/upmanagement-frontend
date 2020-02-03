import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule,
    CollapseModule,
    FormsModule
  ],
  exports: [
    SideBarComponent,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
