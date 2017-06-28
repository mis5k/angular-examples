import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectListComponent } from './subject-list.component';
import { SubjectDetailModule } from '../subject-detail/subject-detail.module';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SubjectsRoutingModule,
  //  SubjectDetailModule
  ],
  declarations: [
    SubjectListComponent
  ]
})
export class SubjectsModule { }