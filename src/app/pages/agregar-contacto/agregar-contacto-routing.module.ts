import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarContactoPage } from './agregar-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarContactoPageRoutingModule {}
