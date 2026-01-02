import 'zone.js'; 
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { MyAngularComponent } from './app/components/my-angular-component/my-angular-component';
import { HeroBannerComponent } from './app/components/hero-banner/hero-banner';
import { CtaBannerComponent } from './app/components/cta-banner/cta-banner';
import { DisneyCardsComponent } from './app/components/disney-cards/disney-cards';

const bootstrap = () => {
  createApplication(appConfig)
    .then((appRef) => {
      const injector = appRef.injector;

      if (!customElements.get('app-my-angular')) {
        const myElement = createCustomElement(MyAngularComponent, { injector });
        customElements.define('app-my-angular', myElement);
        console.log('🚀 Mapped: <app-my-angular>');
      }

      if (!customElements.get('app-hero-banner')) {
        const heroElement = createCustomElement(HeroBannerComponent, { injector });
        customElements.define('app-hero-banner', heroElement);
        console.log('🚀 Mapped: <app-hero-banner>');
      }

      if (!customElements.get('app-cta-banner')) {
        const ctaElement = createCustomElement(CtaBannerComponent, { injector });
        customElements.define('app-cta-banner', ctaElement);
        console.log('🚀 Mapped: <app-cta-banner>');
      }

      if (!customElements.get('app-disney-cards')) {
        const disneyElement = createCustomElement(DisneyCardsComponent, { injector });
        customElements.define('app-disney-cards', disneyElement);
        console.log('🚀 Mapped: <app-disney-cards>');
      }
    })
    .catch(err => console.error('Angular initialization failed:', err));
};

// Check if DOM is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}