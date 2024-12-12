import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validators
    this.profileForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Ensures 10-digit phone number
    });
  }

  ngOnInit(): void {}

  // Submit handler
  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Profile data submitted:', this.profileForm.value);
      alert('Profile updated successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  // Getters for easy access to form controls
  get userName() {
    return this.profileForm.get('userName');
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get phone() {
    return this.profileForm.get('phone');
  }
}
