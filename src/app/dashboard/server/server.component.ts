import {
  Component,
  effect,
  inject,
  Injectable,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

type serverStatus = 'online' | 'offline' | 'unknown';
@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent implements OnInit, OnDestroy {
  currentStatus = signal<serverStatus>('online');

  constructor() {
    // effect(() => {
    //   console.log(this.currentStatus());
    // });
  }
  ngOnInit() {
    setInterval(() => {
      this.currentStatus.set(
        Math.random() > 0.5
          ? 'online'
          : Math.random() > 0.6
          ? 'unknown'
          : 'offline'
      );
    }, 4500);
  }

  ngOnDestroy(): void {}
}
function injectable(): (
  target: typeof ServerComponent
) => void | typeof ServerComponent {
  throw new Error('Function not implemented.');
}
