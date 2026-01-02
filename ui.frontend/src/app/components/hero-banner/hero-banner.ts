import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.html',
  styleUrls: ['./hero-banner.scss']
})
export class HeroBannerComponent {
  // This tells Angular: "Look for the attribute 'heroimage' in the HTML"
  @Input('heroimage') heroImage: string = ''; 
  
  @Input('alttext') altText: string = '';
  
  @Input('heading') heading: string = '';
}