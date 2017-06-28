import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupListComponent } from './group-list.component';

import { GroupDetailModule } from '../group-detail/group-detail.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    GroupsRoutingModule,
  //  GroupDetailModule
  ],
  declarations: [
    GroupListComponent
  ]
})
export class GroupsModule { }