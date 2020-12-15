import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenceTradePageRoutingModule } from './licence-trade-routing.module';

import { LicenceTradePage } from './licence-trade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenceTradePageRoutingModule
  ],
  declarations: [LicenceTradePage]
})
export class LicenceTradePageModule {}
