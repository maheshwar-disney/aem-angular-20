import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule], // Add WdprMediaComponent here if it's a separate import
  templateUrl: './hero-banner.html',
  styleUrls: ['./hero-banner.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroBannerComponent {
  @Input('heroimage') heroImage: string = ''; 
  @Input('alttext') altText: string = '';
  @Input('heading') heading: string = '';
}