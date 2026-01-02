import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-banner.html',
  styleUrls: ['./cta-banner.scss'],
  encapsulation: ViewEncapsulation.None // Allows AEM global styles to apply
})
export class CtaBannerComponent {
  // Explicitly mapping the HTML attribute name to the TypeScript variable
  @Input('heading') heading: string = '';
  @Input('description') description: string = '';
  @Input('button-text') buttonText: string = '';
  @Input('cta-link') ctaLink: string = '';
}