import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserLoginModel } from '../models/classes/user-login.model';
import { environment } from '../../../environments/environment';
import { GLOBAL_CONSTANT } from '../constants/global.constant';
import { Observable } from 'rxjs';
import { API_RESPONSE } from '../models/interface/common.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)

  loginUser(obj: UserLoginModel):Observable<API_RESPONSE>{
    return this.http.post<API_RESPONSE>(environment.API_URL + GLOBAL_CONSTANT.API_METHODS.LOGIN, obj)
  }
}
