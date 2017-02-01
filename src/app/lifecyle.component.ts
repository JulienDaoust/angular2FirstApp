import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecyle',
  template: `
  <ng-content></ng-content>
  <hr>
  <p #boundParagraph>{{bindable}}</p>
  `,
  styles: []
})
export class LifecyleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000;

  @ViewChild('boundParagraph')
  boundParagraph: HTMLElement;

  constructor() { }

  ngOnChanges() {
    this.log('ngOnchanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
    console.log(this.boundParagraph);
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
      console.log(hook);
  }

}
