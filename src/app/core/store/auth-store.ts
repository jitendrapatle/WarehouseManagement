import { computed, Injectable, signal } from '@angular/core';
import { IEmployee, IEmployeeLoginResponse } from '../models/interface/common.model';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private readonly _currentUser = signal<IEmployee | null>(null);
  private readonly _accessToken = signal<string | null>(null);

  readonly currentUser = this._currentUser.asReadonly();
  readonly accessToken = this._accessToken.asReadonly();

  readonly isLoggedIn = computed(()=>{
    !!this._accessToken()
  })

  setSassion(response:IEmployeeLoginResponse){

  }
}
