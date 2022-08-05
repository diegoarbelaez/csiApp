import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilPageRoutingModule } from './editarperfil-routing.module';

import { EditarperfilPage } from './editarperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarperfilPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditarperfilPage]
})
export class EditarperfilPageModule {}
