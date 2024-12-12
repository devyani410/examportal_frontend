import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      enable: true,
      userRoles: []
    });
  }
  // Method to handle form submission
  onSubmit() {
    if (this.registrationForm.valid) {
      const payload = this.registrationForm.value;

      // Call the service to handle the API request
      this.userService.registerUser(payload).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          alert('Registration successful!');
        },
        (error) => {
          console.error('Error occurred:', error);
          alert('Error occurred while registering!');
        }
      );
    } else {
      console.error('Form is invalid');
    }

    // Redirect to the home page
    window.open("/home");
  }
}
