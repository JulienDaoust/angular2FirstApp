import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1> 
    <fa-databinding></fa-databinding>
    <hr>
    <h1>LifeCycle Component</h1> 
    <fa-lifecyle *ngIf = "!delete" [bindable] ="boundValue">
        <p>{{test}}</p>
    </fa-lifecyle>
    <button (click) = "delete = true">Click to Delete</button>
    <button (click) = "test = 'Changed value'">Click to Change Content</button>
    <button (click) = "boundValue = 2000">Click to Change Binding</button>

    `
})
export class AppComponent {
  delete = false;
  test = 'Starting value';
  boundValue = 1000;
}
