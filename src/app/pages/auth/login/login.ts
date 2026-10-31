import { Component, inject } from '@angular/core';
import { UserLoginModel } from '../../../core/models/classes/user-login.model';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service';
import { API_RESPONSE, IEmployeeLoginResponse } from '../../../core/models/interface/common.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { GLOBAL_CONSTANT } from '../../../core/constants/global.constant';
import { ToastService } from '../../../core/services/toast-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  fb = inject(FormBuilder)
  authSrv = inject(AuthService);
  router = inject(Router);
  toastSrv = inject(ToastService)

  loginObj : UserLoginModel = new UserLoginModel;

  readonly loginForm = this.fb.nonNullable.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(){
    debugger;
      if(this.loginForm.invalid){
        return
      }
      
      const loginDetails = this.loginForm.getRawValue();
      this.authSrv.loginUser(loginDetails).subscribe({
        next: (res:API_RESPONSE<IEmployeeLoginResponse>)=>{
          if(res.result){
            this.toastSrv.success(res.message)
            localStorage.setItem(GLOBAL_CONSTANT.Local_Storage_Login_User, JSON.stringify(res.data.employee));
            localStorage.setItem(GLOBAL_CONSTANT.Local_Storage_Login_Token, res.data.token);
            this.router.navigate(['/admin/client-list'])
          }else{
            alert(res.message)
            this.toastSrv.error(res.message)
          }
        },
        error:(err)=>{
          debugger;
            this.toastSrv.error(err.error.message)


        }
      })
      
      
  }
  onLogin(){
    this.authSrv.loginUser(this.loginObj).subscribe({
      next: (res:API_RESPONSE<IEmployeeLoginResponse>)=>{
        if(res.result){
          localStorage.setItem(GLOBAL_CONSTANT.Local_Storage_Login_User, JSON.stringify(res.data.employee));
          localStorage.setItem(GLOBAL_CONSTANT.Local_Storage_Login_Token, res.data.token);
          this.router.navigate(['/admin/client-list'])
        } else{
          alert(res.message)
        }
      },
      error:(err:any)=>{
        alert(err.error.message)
      }
    })
  }
}
