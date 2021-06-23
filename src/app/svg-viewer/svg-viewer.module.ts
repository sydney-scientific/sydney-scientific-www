import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {SvgViewerComponent} from './svg-viewer.component';

@NgModule({
  exports: [SvgViewerComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [SvgViewerComponent],
})
export class SvgViewerModule { }
