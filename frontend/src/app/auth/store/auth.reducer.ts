import { AuthActions, LOGIN, LOGOUT } from './auth.actions';

export interface AuthState {
  user: {
    id: number;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    refreshToken: string;
    refreshTokenExp: string;
    token: string;
  } | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = { user: null, isAuthenticated: false };

export const authReducer = (
  state: AuthState = initialState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case LOGIN:
      // @ts-ignore: Unreachable code error
      return { ...initialState, user: action.payload, isAuthenticated: true };
    default:
      return state;
  }
};
