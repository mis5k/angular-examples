import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsComponent }    from './subjects.componet';


const subjectsRoutes: Routes = [
  { path: '',  component: SubjectsComponent,
      children:[
	    {
        path: ':id',
        loadChildren: 'src-multipleroutes/app/subject-detail/subject-detail.module#SubjectDetailModule' 
	    }] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(subjectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SubjectsRoutingModule { }