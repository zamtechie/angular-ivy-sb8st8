import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

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

  obs = new Observable((observer) => {
    console.log('Observer start');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
  }).pipe(filter((data) => data > 1));

  ngOnInit() {
    this.obs.subscribe((val) => {
      console.log(val);
    });
  }
}
