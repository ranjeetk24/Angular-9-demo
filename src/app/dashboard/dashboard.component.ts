import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        creditScore: ['', [Validators.required, Validators.min(1), Validators.max(850)]],
        income: ['', [Validators.required, Validators.min(1)]]
    });

    }

    get f() { return this.registerForm.controls; }

  getProducts(): void {

  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)');
}


}
