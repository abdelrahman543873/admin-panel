import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Login } from './store/auth.actions';
import { AppState } from '../shared/store/app.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private store: Store<AppState>,
  ) {}

  login(email: string, password: string) {
    return this.http
      .post(`${environment.host}/auth/login`, { email, password })
      .pipe(tap((resData) => this.handleAuthentication(resData)));
  }

  private handleAuthentication(input: any) {
    this.store.dispatch(
      new Login({
        id: input.id,
        email: input.email,
        name: input.name,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        refreshToken: input.refreshToken,
        refreshTokenExp: input.refreshTokenExp,
        token: input.token,
      }),
    );
  }
}
