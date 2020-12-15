import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenceTradePage } from './licence-trade.page';

const routes: Routes = [
  {
    path: '',
    component: LicenceTradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenceTradePageRoutingModule {}
