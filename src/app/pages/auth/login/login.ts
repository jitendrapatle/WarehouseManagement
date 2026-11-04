import { Component, inject, signal } from '@angular/core';
import { UserLoginModel } from '../../../core/models/classes/user-login.model';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service';
import { API_RESPONSE, IEmployeeLoginResponse } from '../../../core/models/interface/common.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { GLOBAL_CONSTANT } from '../../../core/constants/global.constant';
import { ToastService } from '../../../core/services/toast-service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  fb = inject(FormBuilder);
  authSrv = inject(AuthService);
  router = inject(Router);
  toastSrv = inject(ToastService);

  isSpinnerLoading = signal<boolean>(false); 

  readonly loginForm = this.fb.nonNullable.group({
    userName: ['', [Validators.required]],
    password: ['',[ Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    this.isSpinnerLoading.set(true);

    if (this.loginForm.invalid) {
      return;
    }

    const loginDetails = this.loginForm.getRawValue();
    this.authSrv.loginUser(loginDetails).pipe(
      finalize(()=>{
          this.isSpinnerLoading.set(false);
      })
    ).subscribe({
      next: (res: API_RESPONSE<IEmployeeLoginResponse>) => {
        if (res.result) {
          this.toastSrv.success(res.message);
          localStorage.setItem(
            GLOBAL_CONSTANT.Local_Storage_Login_User,
            JSON.stringify(res.data.employee),
          );
          localStorage.setItem(GLOBAL_CONSTANT.Local_Storage_Login_Token,  res.data.token);
          this.router.navigate(['/admin/client-list']);
        } else { 
          this.toastSrv.error(res.message);
        }
      },
      error: (err) => {
        this.toastSrv.error(err.error.message);
      },
    });
  }
  
}
