import { Component, Input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-banner.html',
  styleUrls: ['./cta-banner.scss'],
  encapsulation: ViewEncapsulation.None,
  // Add the schema here to support <wdpr-button> and other RA components
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class CtaBannerComponent {
  @Input('heading') heading: string = '';
  @Input('description') description: string = '';
  @Input('button-text') buttonText: string = '';
  @Input('cta-link') ctaLink: string = '';

  onClick(event: any): void {
    console.log('Button clicked', event);
    if (this.ctaLink) {
      window.location.href = this.ctaLink + '.html';
    }
  }
 
  onDisabledChanged(event: any): void {
    console.log('Disabled state changed', event);
  }
}