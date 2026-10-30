import { Component, inject } from '@angular/core';
import { UserLoginModel } from '../../../core/models/classes/user-login.model';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service';
import { API_RESPONSE } from '../../../core/models/interface/common.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { GLOBAL_CONSTANT } from '../../../core/constants/global.constant';

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

  loginObj : UserLoginModel = new UserLoginModel;

  readonly loginForm = this.fb.nonNullable.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(){
      if(this.loginForm.invalid){
        return
      }
      
      const loginDetails = this.loginForm.getRawValue();
      this.authSrv.loginUser(loginDetails).subscribe({
        next: (res)=>{
          
        }
      })
      
      
  }
  onLogin(){
    this.authSrv.loginUser(this.loginObj).subscribe({
      next: (res:API_RESPONSE)=>{
        if(res.result){
          localStorage.setItem(GLOBAL_CONSTANT.Local_Storage_Login_Key, JSON.stringify(res.data.employee));
          localStorage.setItem('token', res.data.token);
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
