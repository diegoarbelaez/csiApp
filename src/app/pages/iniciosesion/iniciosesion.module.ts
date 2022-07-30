import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciosesionPageRoutingModule } from './iniciosesion-routing.module';

import { IniciosesionPage } from './iniciosesion.page';
import { HerramientasUIService } from '../../services/herramientas-ui.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciosesionPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IniciosesionPage]
})
export class IniciosesionPageModule {}
