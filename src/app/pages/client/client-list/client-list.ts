import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { ClientService } from '../../../core/services/client-service';
import { API_RESPONSE } from '../../../core/models/interface/common.model';
import { ClientModel } from '../../../core/models/classes/client.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-list',
  imports: [],
  templateUrl: './client-list.html',
  styleUrl: './client-list.scss',
})
export class ClientList implements OnInit, OnDestroy{

  clientSrv = inject(ClientService)

  subscription! : Subscription;

  // clientList : WritableSignal<ClientModel[]> = signal<ClientModel[]>([]);

  ngOnInit(): void {
    this.getAllClient();
  }
  getAllClient(){
     
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
