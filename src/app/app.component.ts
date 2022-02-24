import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  angularName = 'Angular ' + VERSION.major;

  addItem(event) {
    console.log(event);
    this.angularName += event;
  }
}
