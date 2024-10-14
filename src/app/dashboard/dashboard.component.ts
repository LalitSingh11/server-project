import { Component } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ServerComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
