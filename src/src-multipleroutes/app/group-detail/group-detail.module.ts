import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { GroupDetailComponent }    from './group-detail.componet';
import { GroupDetailRoutingModule } from './group-detail-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GroupDetailRoutingModule
  ],
  declarations: [
    GroupDetailComponent
  ]
})
export class GroupDetailModule {}