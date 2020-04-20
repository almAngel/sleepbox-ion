import { LinearPage } from './../linear/linear.page';
import { SummaryPage } from './../summary/summary.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatsPageRoutingModule } from './stats-routing.module';

import { StatsPage } from './stats.page';

import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatsPageRoutingModule,
    GoogleChartsModule
  ],
  declarations: [StatsPage, SummaryPage, LinearPage]
})
export class StatsPageModule {}
