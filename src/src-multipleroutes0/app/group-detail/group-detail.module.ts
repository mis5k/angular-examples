import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { GroupDetailRoutingModule } from './group-detail-routing.module';
import { GroupDetailComponent } from './group-detail.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    GroupDetailRoutingModule
  ],
  declarations: [
    GroupDetailComponent
  ]
})
export class GroupDetailModule { }