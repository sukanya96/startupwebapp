import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgnPageRoutingModule } from './resgn-routing.module';

import { ResgnPage } from './resgn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgnPageRoutingModule
  ],
  declarations: [ResgnPage]
})
export class ResgnPageModule {}
