import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientList } from './pages/client/client-list/client-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('WarehouseManagement');
}
