import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../layout/layout.module';
import { IsLoadingComponent } from './components/is-loading/is-loading.component';

@NgModule({
  declarations: [
    IsLoadingComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
  ],
  exports: [
    LayoutModule,
    IsLoadingComponent
  ]
})
export class SharedModule {}
