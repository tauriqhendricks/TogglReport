import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    HomeComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
