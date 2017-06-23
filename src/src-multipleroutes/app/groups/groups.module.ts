import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { GroupsComponent }    from './groups.componet';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsService } from './groups.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GroupsRoutingModule
  ],
  declarations: [
    GroupsComponent
  ],
  providers: [ GroupsService ]
})
export class GroupsModule {}