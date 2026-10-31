import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientList } from './pages/client/client-list/client-list';
import { Toast } from './shared/reusable-components/toast/toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('WarehouseManagement');
}
