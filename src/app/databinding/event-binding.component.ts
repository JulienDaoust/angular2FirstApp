import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">CLick me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onClicked() {
    alert('It worked!!');
  }
}
