import {HttpClient} from '@angular/common/http';
import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-svg-viewer',
  templateUrl: './svg-viewer.component.html',
  styleUrls: ["./svg-viewer.component.scss"]
})
export class SvgViewerComponent implements OnInit {
  @Input() src: string | undefined;
  @Input() scaleToContainer: boolean | undefined;

  constructor(private elementRef: ElementRef, private http: HttpClient) { }

  ngOnInit() {
    if (this.src) {
      this.fetchAndInlineSvgContent(this.src);
    }
  }

  private inlineSvgContent(template: string) {
    this.elementRef.nativeElement.innerHTML = template;

    if (this.scaleToContainer) {
      const svg = this.elementRef.nativeElement.querySelector('svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    }
  }

  private fetchAndInlineSvgContent(path: string): void {
    const svgAbsPath = getAbsolutePathFromSrc(path);
    this.http.get(svgAbsPath, {responseType: 'text'}).subscribe(svgResponse => {
      this.inlineSvgContent(svgResponse);
    });
  }
}

const getAbsolutePathFromSrc = (src: string): string => src.slice(src.indexOf('assets/') - 1);
