import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChgaddrsPage } from './chgaddrs.page';

const routes: Routes = [
  {
    path: '',
    component: ChgaddrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChgaddrsPageRoutingModule {}
