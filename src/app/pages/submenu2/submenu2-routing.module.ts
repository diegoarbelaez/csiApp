import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Submenu2Page } from './submenu2.page';

const routes: Routes = [
  {
    path: '',
    component: Submenu2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Submenu2PageRoutingModule {}
