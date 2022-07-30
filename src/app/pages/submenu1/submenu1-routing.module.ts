import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Submenu1Page } from './submenu1.page';

const routes: Routes = [
  {
    path: '',
    component: Submenu1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Submenu1PageRoutingModule {}
