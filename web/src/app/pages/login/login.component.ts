import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ILogin } from './models/login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ToastrModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const data: ILogin = this.loginForm.value
      this.loginService.login(data).subscribe({
        next: (res) => {
          console.log('Login successfully', res)
          this.toastr.success('You have successfully Log in!', 'Success');

          setTimeout(() => {
            this.loginForm.reset()
            this.router.navigate(['/admin'])
          }, 1000);

        },
        error: (err: any) => {
          if (err?.error?.errors) {
            Object.entries(err.error.errors).forEach(([field, messages]: [string, any]) => {
              messages.forEach((message: string) => {
                this.toastr.error(`${field}: ${message}`, 'Validation Error');
              });
            });
          } else {
            this.toastr.error('Unauthorized User!', 'Error');
          }
        },
      })
    }
  }
}
