import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import token from 'src/helpers/token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router) { }
    private isAuth = false;

    login() {
        // Perform login and set isAuthenticated to true
        this.isAuth = true;
    }

    logout() {
        this.isAuth = false;
    }

    isAuthenticated() {
        const access_token = token.getToken();
        return access_token !== undefined;
    }

    navigateToHomePage() {
        this.router.navigate(['/show/list']);
    }

    navigateToLogin() {
        this.router.navigate(['/login']);
    }
}