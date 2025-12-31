import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-angular',
  standalone: true,
  templateUrl: './my-angular-component.html',
  styleUrls: ['./my-angular-component.scss']
})
export class MyAngularComponent {
  // This variable name will be used as an attribute in HTL
  @Input() message: string = 'Default message from Angular';
}