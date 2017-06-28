import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectListComponent } from './subject-list.component';
import { SubjectDetailComponent } from '../subject-detail/subject-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '__first__',
    pathMatch: 'full',
  },  
  {
    path: ':subject',
    component: SubjectListComponent,
    loadChildren: 'src-multipleroutes0/app/subject-detail/subject-detail.module#SubjectDetailModule'
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
export class SubjectsRoutingModule { }
