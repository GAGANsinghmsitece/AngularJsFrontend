import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import config from 'src/helpers/helper';
import token from 'src/helpers/token';
import { AuthService } from 'src/services/AuthService';
interface responseType {
  status: boolean,
  token: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) { }
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  ngOnInit() {
    if (this.authService.isAuthenticated() === true) {
      this.authService.navigateToHomePage();
    }
  }
  onSubmit() {
    try {
      if (this.loginForm.valid) {
        this.http.post<responseType>(
          `${config.baseUrl}/api/v1/auth/authenticate`,
          this.loginForm.value
        ).subscribe((response) => {
          if (response.status === true) {
            token.setToken(response.token);
            this.authService.navigateToHomePage();
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}
