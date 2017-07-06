import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaletteItemComponent } from './palette-item.component';

const routes: Routes = [
  {
    path: ':p1',
    component: PaletteItemComponent,
    outlet: 'p1'
  },
  {
    path: ':p2',
    component: PaletteItemComponent,
    outlet: 'p2'
  },
  {
    path: ':p3',
    component: PaletteItemComponent,
    outlet: 'p3'
  },
  {
    path: ':p4',
    component: PaletteItemComponent,
    outlet: 'p4'
  },
  {
    path: ':p5',
    component: PaletteItemComponent,
    outlet: 'p5'
  },
  {
    path: ':p6',
    component: PaletteItemComponent,
    outlet: 'p6'
  },
  {
    path: ':p7',
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