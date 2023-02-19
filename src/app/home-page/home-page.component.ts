import { Component } from '@angular/core';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private authService: AuthService) { }
  ngOnInit() {
    if (this.authService.isAuthenticated() === true) {
      this.authService.navigateToHomePage();
    }
  }
}
