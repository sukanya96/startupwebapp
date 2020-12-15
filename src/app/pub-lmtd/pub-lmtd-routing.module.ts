import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubLmtdPage } from './pub-lmtd.page';

const routes: Routes = [
  {
    path: '',
    component: PubLmtdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubLmtdPageRoutingModule {}
