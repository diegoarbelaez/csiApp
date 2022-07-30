import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Submenu2PageRoutingModule } from './submenu2-routing.module';

import { Submenu2Page } from './submenu2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Submenu2PageRoutingModule
  ],
  declarations: [Submenu2Page]
})
export class Submenu2PageModule {}
