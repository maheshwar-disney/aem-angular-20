import 'zone.js'; 
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MyAngularComponent } from './app/my-angular-component/my-angular-component';

const bootstrap = () => {
  createApplication(appConfig)
    .then((appRef) => {
      if (!customElements.get('app-my-angular')) {
        const myElement = createCustomElement(MyAngularComponent, { 
          injector: appRef.injector 
        });
        customElements.define('app-my-angular', myElement);
        console.log('🚀 Angular successfully mapped to <app-my-angular>');
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