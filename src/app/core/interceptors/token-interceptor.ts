import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { GLOBAL_CONSTANT } from '../constants/global.constant';
import { catchError, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const token =  localStorage.getItem(GLOBAL_CONSTANT.Local_Storage_Login_Token)
  // const tokenn = JSON.parse(token)
  if(token == null){
    return next(req)
  }
  const cloneRequest = req.clone({
    setHeaders:{
      authorization: `Bearer ${token}`
    }
  })
  return next(cloneRequest).pipe(
    catchError((err: HttpErrorResponse) => {
    // here we can catch error globally
    switch (err.status) {
      case 400:
        console.error('Bad Request');
        break;

      case 401:
        console.error('Unauthorized...');
        alert('check id and password')
        break;

      case 403:
        console.error('Forbidden');
        break;

      case 500:
        console.error('Server Error');
        break;
    }

    return throwError(() => err);
  })
  );
};
