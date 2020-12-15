import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocTradePageRoutingModule } from './roc-trade-routing.module';

import { RocTradePage } from './roc-trade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocTradePageRoutingModule
  ],
  declarations: [RocTradePage]
})
export class RocTradePageModule {}
