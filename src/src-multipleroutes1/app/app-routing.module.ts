import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'groups',
    loadChildren: 'src-multipleroutes1/app/groups/groups.module#GroupsModule'
  },
  {
    path: 'subjects',
    loadChildren: 'src-multipleroutes1/app/subjects/subjects.module#SubjectsModule'
  },
  { path: '',   redirectTo: '/groups', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }