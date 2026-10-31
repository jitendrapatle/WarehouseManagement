import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { UserLoginModel } from '../models/classes/user-login.model';
import { environment } from '../../../environments/environment';
import { GLOBAL_CONSTANT } from '../constants/global.constant';
import { Observable, tap } from 'rxjs';
import { API_RESPONSE, IEmployee, IEmployeeLoginResponse } from '../models/interface/common.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  private readonly _currentUser = signal<IEmployee | null>(null);
  private readonly _accesstoken = signal<string | null>(null);

  readonly currentUser = this._currentUser.asReadonly();
  readonly accesstoken = this._accesstoken.asReadonly();

  readonly isLoggedIn = computed(()=>{
    !!this._accesstoken;
  })
 

  loginUser(obj: UserLoginModel): Observable<API_RESPONSE<IEmployeeLoginResponse>> {
    debugger;

    return this.http
      .post<API_RESPONSE<IEmployeeLoginResponse>>(
        environment.API_URL + GLOBAL_CONSTANT.API_METHODS.LOGIN,
        obj,
      )
      .pipe(tap((res: any) => {}));
  }
}
