import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { GroupListComponent } from './groups/group-list.component';
//import { GroupDetailComponent } from './group-detail/group-detail.component';
// import { SubjectListComponent } from './subjects/subject-list.component';
//import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { PageNotFoundComponent }    from './not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/group',
    pathMatch: 'full',
  },
  {
    path: 'group',
    loadChildren: 'src-multipleroutes0/app/groups/groups.module#GroupsModule'
  },
  {
    path: 'subject',
    loadChildren: 'src-multipleroutes0/app/subjects/subjects.module#SubjectsModule'
  }, 
  { path: '.html',   redirectTo: '/group', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
