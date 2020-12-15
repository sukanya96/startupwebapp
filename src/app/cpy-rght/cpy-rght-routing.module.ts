import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpyRghtPage } from './cpy-rght.page';

const routes: Routes = [
  {
    path: '',
    component: CpyRghtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpyRghtPageRoutingModule {}
