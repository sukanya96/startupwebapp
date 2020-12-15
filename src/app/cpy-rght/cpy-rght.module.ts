import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpyRghtPageRoutingModule } from './cpy-rght-routing.module';

import { CpyRghtPage } from './cpy-rght.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpyRghtPageRoutingModule
  ],
  declarations: [CpyRghtPage]
})
export class CpyRghtPageModule {}
