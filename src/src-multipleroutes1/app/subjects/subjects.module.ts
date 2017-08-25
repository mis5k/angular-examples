import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SubjectsComponent }    from './subjects.componet';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsService }    from './subjects.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SubjectsRoutingModule
  ],
  declarations: [
    SubjectsComponent
  ],
  providers: [SubjectsService]
})
export class SubjectsModule {}