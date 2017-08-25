import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupsComponent }    from './groups.componet';

const groupsRoutes: Routes = [
  { path: '',  component: GroupsComponent,
      children:[
	    {
        path: ':id',
        loadChildren: 'src-multipleroutes/app/group-detail/group-detail.module#GroupDetailModule' 
	    }]  
  }
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