import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgnPage } from './resgn.page';

const routes: Routes = [
  {
    path: '',
    component: ResgnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgnPageRoutingModule {}
