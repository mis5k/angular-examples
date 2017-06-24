import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupDetailComponent }    from './group-detail.componet';

const groupsRoutes: Routes = [
   { path: '',  component: GroupDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(groupsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GroupDetailRoutingModule { }