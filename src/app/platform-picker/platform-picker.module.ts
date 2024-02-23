import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { PlatformPickerComponent } from './platform-picker.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatMenuModule
  ],
  declarations: [PlatformPickerComponent],
  exports: [PlatformPickerComponent]
})
export class PlatformPickerModule {
}
