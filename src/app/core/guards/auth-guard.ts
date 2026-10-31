import { CanActivateFn, Router } from '@angular/router';
import { GLOBAL_CONSTANT } from '../constants/global.constant';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const localStorageData = localStorage.getItem(GLOBAL_CONSTANT.Local_Storage_Login_Token)

  if(localStorageData !== null){
    return true;
  }else{
    alert("Login first")
    router.navigateByUrl("/login")
    return false
    
  }

};
