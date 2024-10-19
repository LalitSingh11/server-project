import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  form = viewChild<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; request: string }>();

  // ngOnInit() {
  //   console.log('ON INIT ');
  //   console.dir(this.form()?.nativeElement);
  // }

  // ngAfterViewInit() {
  //   console.log('ON View INIT ');
  //   console.dir(this.form()?.nativeElement);
  // }

  onSubmit(title: string, request: string) {
    this.add.emit({ title, request });
    this.form()?.nativeElement.reset();
  }
}
