import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  loginForm: FormGroup;
  isLoginMode = true; // Flag to toggle between login and registration

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    // Initialize Registration Form
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      enable: true,
      userRoles: [],
    });

    // Initialize Login Form
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    console.log('Component initialized');
  }

  // Toggle between Login and Registration modes
  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // Get the current form (login or registration)
  getCurrentForm() {
    return this.isLoginMode ? this.loginForm : this.registrationForm;
  }

  // Handle Login Submission
  onLogin() {
    if (this.loginForm.valid) {
      const { userName, password } = this.loginForm.value;
      this.userService.LoginUser(userName, password).subscribe(
        (response) => {
          console.log('Login successful:', response);
          alert('Login successful!');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login failed:', error);
          alert('Error occurred during login!');
        }
      );
    } else {
      console.error('Login form is invalid');
    }
  }

  // Handle Registration Submission
  onSubmit() {
    if (this.registrationForm.valid) {
      const payload = this.registrationForm.value;
      this.userService.registerUser(payload).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          alert('Registration successful!');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error occurred:', error);
          alert('Error occurred while registering!');
        }
      );
    } else {
      console.error('Registration form is invalid');
    }
  }
}
