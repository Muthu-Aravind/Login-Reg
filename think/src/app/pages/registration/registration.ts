import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  submitted = false;
  passwordMismatch = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.passwordMismatch = false;

    if (this.registrationForm.invalid) {
      return;
    }

    const password = this.registrationForm.value.password;
    const confirmPassword = this.registrationForm.value.confirmPassword;

    if (password !== confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    console.log('✅ Registered:', this.registrationForm.value);
  }
}
