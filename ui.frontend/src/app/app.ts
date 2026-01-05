import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import angular components from the component library (wrappers for Stencil components)
import {
  ComponentLibraryModule,
  registerComponentLibraryElements,
} from '@wdpr/ra-web-components-angular';

// register the Stencil components as custom elements
registerComponentLibraryElements();

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentLibraryModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-site-frontend');
}
