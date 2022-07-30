import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Submenu1PageRoutingModule } from './submenu1-routing.module';

import { Submenu1Page } from './submenu1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Submenu1PageRoutingModule
  ],
  declarations: [Submenu1Page]
})
export class Submenu1PageModule {}
