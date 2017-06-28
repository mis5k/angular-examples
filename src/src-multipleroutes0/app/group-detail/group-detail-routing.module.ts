import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupDetailComponent } from './group-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: GroupDetailComponent
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
export class GroupDetailRoutingModule { }