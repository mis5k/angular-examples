import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SubjectDetailComponent }    from './subject-detail.component';
import { SubjectDetailRoutingModule } from './subject-detail-routing.module';


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
export class SubjectDetailModule {}