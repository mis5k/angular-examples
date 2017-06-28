import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectDetailComponent } from './subject-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SubjectDetailComponent,
  }  
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class SubjectDetailRoutingModule { }
