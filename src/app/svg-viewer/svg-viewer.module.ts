import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from "@angular/flex-layout";

import { SvgViewerComponent } from './svg-viewer.component';

@NgModule({
  exports: [SvgViewerComponent],
  imports: [
    CommonModule, HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [SvgViewerComponent],
})
export class SvgViewerModule {
}
