import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_RESPONSE } from '../models/interface/common.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GLOBAL_CONSTANT } from '../constants/global.constant';
import { ClientModel } from '../models/classes/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  http = inject(HttpClient)


  // getAllClients():Observable<API_RESPONSE>{
       
  // }

  // saveClient(obj:ClientModel) : Observable<API_RESPONSE>{
     
  // }
}
