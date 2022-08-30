import { AppState } from './../../shared/store/app.store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorLogin = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      () => {
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      },
      (error) => {
        localStorage.removeItem('token');
        this.errorLogin = true;
      },
    );
  }
}
