import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaletteItemComponent } from './palette-item.component';

const routes: Routes = [
  {
    path: ':color',
    component: PaletteItemComponent,
    outlet: 'p1'
  },
  {
    path: ':color',
    component: PaletteItemComponent,
    outlet: 'p2'
  },
  {
    path: ':color',
    component: PaletteItemComponent,
    outlet: 'p3'
  },
  {
    path: ':color',
    component: PaletteItemComponent,
    outlet: 'p4'
  },
  {
    path: ':color',
    component: PaletteItemComponent,
    outlet: 'p5'
  },
  {
    path: ':color',
    component: PaletteItemComponent,
    outlet: 'p6'
  },
  {
    path: ':color',
    component: PaletteItemComponent,
    outlet: 'p7'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [AppComponent];