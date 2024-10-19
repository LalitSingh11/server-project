import {
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ElementRef,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  private control = contentChild<ElementRef<HTMLInputElement>>('title');

  constructor() {
    // afterRender(() => {
    //   console.log('afterRender');
    // });
    // afterNextRender(() => {
    //   console.log('afterNextRender');
    // });
  }

  onClick() {
    console.log(this.control());
  }
  ngAfterContentInit() {
    console.log(this.control());
  }
  label = input.required<string>();
}
