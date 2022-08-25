import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: {
      id: number;
      email: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      refreshToken: string;
      refreshTokenExp: string;
      token: string;
    },
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions = Login;
