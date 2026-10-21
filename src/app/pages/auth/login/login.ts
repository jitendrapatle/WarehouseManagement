import { Component, inject } from '@angular/core';
import { UserLoginModel } from '../../../core/models/classes/user-login.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service';
import { API_RESPONSE } from '../../../core/models/interface/common.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  authSrv = inject(AuthService);
  router = inject(Router);

  loginObj : UserLoginModel = new UserLoginModel;

  onLogin(){
    this.authSrv.loginUser(this.loginObj).subscribe({
      next: (res:API_RESPONSE)=>{
        if(res.result){
          localStorage.setItem('GLOBAL_CONSTANT.Local_Storage_Login_Key', JSON.stringify(res.data));
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
