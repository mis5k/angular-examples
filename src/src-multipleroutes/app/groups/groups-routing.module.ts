import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupsComponent }    from './groups.componet';

const groupsRoutes: Routes = [
  { path: 'groups',  component: GroupsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(groupsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GroupsRoutingModule { }