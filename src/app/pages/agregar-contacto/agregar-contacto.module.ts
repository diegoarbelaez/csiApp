import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarContactoPageRoutingModule } from './agregar-contacto-routing.module';

import { AgregarContactoPage } from './agregar-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarContactoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarContactoPage]
})
export class AgregarContactoPageModule {}
