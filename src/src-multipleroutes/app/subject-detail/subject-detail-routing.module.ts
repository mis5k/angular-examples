import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectDetailComponent }    from './subject-detail.component';


const subjectDetailRoutes: Routes = [
  { path: '',  component: SubjectDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(subjectDetailRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubjectDetailRoutingModule { }