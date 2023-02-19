import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import token from 'src/helpers/token';
import { AuthService } from 'src/services/AuthService';

import config from '../../helpers/helper';
interface responseType {
  status: boolean;
  token: string;
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }
  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,]],
  });
  ngOnInit() {
    if (this.authService.isAuthenticated() === true) {
      this.authService.navigateToHomePage();
    }
  }
  onSubmit() {
    try {
      if (this.signUpForm.valid) {
        this.http.post<responseType>(`http://localhost:3333/api/v1/auth/register`, this.signUpForm.value)
          .subscribe((response) => {
            if (response?.status === true) {
              token.setToken(response?.token);
            }
          })
      }
    } catch (err) {
      console.log(err);
    }
  }
}
