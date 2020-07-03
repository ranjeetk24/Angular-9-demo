import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/internal/operators/first';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pushRightClass: string;
  loginModal: boolean;
  loginForm: FormGroup;
  loginFormSubmitted = false;

  registerModal: boolean;
  registerForm: FormGroup;
  registerFormSubmitted = false;

  constructor( public router: Router,
               private formBuilder: FormBuilder,
               private userService: UserService) {

      this.router.events.subscribe(val => {
          if (
              val instanceof NavigationEnd &&
              window.innerWidth <= 992 &&
              this.isToggled()
          ) {
              this.toggleSidebar();
          }
      });
  }

  ngOnInit() {
      this.pushRightClass = 'push-right';
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
      this.registerForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^\\d*$'), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]]
  });
  }

  showLoginDlg() {
    this.loginModal = true; // Show-Hide Modal Check
    // this.loginForm = new FormGroup({
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    // });

  }
hideLoginDlg() {
    this.loginModal = false;
  }

  showRegistrationDlg() {
    this.registerModal = true; // Show-Hide Modal Check

  }
hideRegistrationDlg() {
    this.registerModal = false;
  }

  get f() { return this.loginForm.controls; }
  get r() { return this.registerForm.controls; }
  onLoginSubmit() {
      this.loginFormSubmitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      if (this.loginFormSubmitted) {
        this.loginModal = false;
      }
  }

  onRegistrationSubmit() {
    this.registerFormSubmitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if (this.registerFormSubmitted) {
      this.registerModal = false;
    }
    this.userService.register(this.registerForm.value)
    .pipe(first())
    .subscribe(
        data => {

            this.router.navigate(['/users']);
        },
        error => {

          console.log('Error occurred');
        });
    console.log('Regitration done');
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['AppComponent']);
  });
}

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('rtl');
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }
}
