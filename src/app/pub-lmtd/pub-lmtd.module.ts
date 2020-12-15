import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubLmtdPageRoutingModule } from './pub-lmtd-routing.module';

import { PubLmtdPage } from './pub-lmtd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubLmtdPageRoutingModule
  ],
  declarations: [PubLmtdPage]
})
export class PubLmtdPageModule {}
