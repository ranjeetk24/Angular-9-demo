import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  show() {
    this.showModal = true; // Show-Hide Modal Check

  }
hide() {
    this.showModal = false;
  }

// tslint:disable-next-line:use-lifecycle-interface
ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if (this.submitted) {
      this.showModal = false;
    }
}
}
