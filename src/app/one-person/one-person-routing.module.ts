import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePersonPage } from './one-person.page';

const routes: Routes = [
  {
    path: '',
    component: OnePersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnePersonPageRoutingModule {}
