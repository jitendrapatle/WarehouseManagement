import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GLOBAL_CONSTANT } from '../constants/global.constant';
import { Observable } from 'rxjs';
import { IWarehouse } from '../models/interface/warehouse.model';
import { API_RESPONSE } from '../models/interface/common.model';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  http = inject(HttpClient);


  getAllWarehouses():Observable<API_RESPONSE>{
    return this.http.get<API_RESPONSE>(environment.API_URL+GLOBAL_CONSTANT.API_METHODS.WAREHOUSE.GET_ALL_WAREHOUSE)
  }

  createNewWarehouse(obj:IWarehouse){

  }

}
