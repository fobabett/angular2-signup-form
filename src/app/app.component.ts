import { Component } from '@angular/core';
import { FormComponent } from './form';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FormComponent]
})
export class AppComponent {
}
