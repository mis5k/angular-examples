import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { SubjectDetailRoutingModule } from './subject-detail-routing.module';
import { SubjectDetailComponent } from './subject-detail.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SubjectDetailRoutingModule
  ],
  declarations: [
    SubjectDetailComponent
  ]
})
export class SubjectDetailModule { }