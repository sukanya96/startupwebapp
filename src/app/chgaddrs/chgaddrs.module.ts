import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChgaddrsPageRoutingModule } from './chgaddrs-routing.module';

import { ChgaddrsPage } from './chgaddrs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChgaddrsPageRoutingModule
  ],
  declarations: [ChgaddrsPage]
})
export class ChgaddrsPageModule {}
