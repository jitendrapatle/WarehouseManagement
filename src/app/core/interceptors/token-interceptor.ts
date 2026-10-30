import { HttpInterceptorFn } from '@angular/common/http';
import { GLOBAL_CONSTANT } from '../constants/global.constant';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const token = localStorage.getItem('token')

  const cloneRequest = req.clone({
    setHeaders:{
      authorization: `Bearer ${token}`
    }
  })
  return next(cloneRequest);
};
