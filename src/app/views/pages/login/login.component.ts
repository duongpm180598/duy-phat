import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading = false;
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const user = {
      email: 'hanghainguyen',
      password: '123456',
    };
    this.loading = true;
    this.authService.login(user).subscribe((data) => {
      if (data) {
        this.loading = false;
        this.router.navigateByUrl('ticket');
      }
    });
  }
}
