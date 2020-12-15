import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApptmntPageRoutingModule } from './apptmnt-routing.module';

import { ApptmntPage } from './apptmnt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApptmntPageRoutingModule
  ],
  declarations: [ApptmntPage]
})
export class ApptmntPageModule {}
