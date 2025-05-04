import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterService } from './register.service';
import { IRegisterUser } from './models/register.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [
    ToastrModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;


  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router, private toastr: ToastrService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const registerData: IRegisterUser = this.registerForm.value
      this.registerService.register(registerData).subscribe({
        next: (res) => {
          console.log('Registered successfully', res)
          this.toastr.success('You have successfully registered! Please login.', 'Success');

          setTimeout(() => {
            this.registerForm.reset()
            this.router.navigate(['/login'])
          }, 1500);

        },
        error: (err) => console.error('Registration failed', err),
      })
    }
  }
}

