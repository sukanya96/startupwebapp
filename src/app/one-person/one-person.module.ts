import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePersonPageRoutingModule } from './one-person-routing.module';

import { OnePersonPage } from './one-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePersonPageRoutingModule
  ],
  declarations: [OnePersonPage]
})
export class OnePersonPageModule {}
