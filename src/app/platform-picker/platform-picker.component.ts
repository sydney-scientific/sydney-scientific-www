import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Platform, PlatformPickerService } from './platform-picker.service';

@Component({
    selector: 'app-platform-picker',
    templateUrl: './platform-picker.component.html',
    styleUrls: ['./platform-picker.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class PlatformPickerComponent implements OnInit {
  platformSelectd: string = "Linux";

  constructor(public platformPickerService: PlatformPickerService) {
  }

  ngOnInit() {
    this.platformSelectd = this.platformPickerService.getPlatform();
  }

  updateService(event: { value?: Platform }) {
    if (event.value != null) this.platformPickerService.setPlatform(event.value);
  }
}
