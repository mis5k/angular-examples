import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupListComponent } from './group-list.component';
import { GroupDetailComponent } from '../group-detail/group-detail.component';


const appRoutes: Routes = [
 {
    path: '',
    redirectTo: '__first__',
    pathMatch: 'full',
  },  
  {
    path: ':group',
    component: GroupListComponent,
    loadChildren: 'src-multipleroutes0/app/group-detail/group-detail.module#GroupDetailModule' 
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
export class GroupsRoutingModule { }