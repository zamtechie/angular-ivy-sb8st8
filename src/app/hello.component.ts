import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}</h1><button (click)="sendToParent('newName')">Send to Parent</button>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  @Output() newName: EventEmitter<any> = new EventEmitter();

  sendToParent(val: string) {
    this.newName.emit(val);
  }

  // sendToParent('Parent');
}
