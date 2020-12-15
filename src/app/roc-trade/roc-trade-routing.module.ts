import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocTradePage } from './roc-trade.page';

const routes: Routes = [
  {
    path: '',
    component: RocTradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocTradePageRoutingModule {}
