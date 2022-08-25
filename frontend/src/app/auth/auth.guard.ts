import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AppState } from '../shared/store/app.store';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isAuthenticated = false;
    this.store.select('auth').subscribe((stateData) => {
      isAuthenticated = stateData.isAuthenticated;
    });
    if (!isAuthenticated) this.router.navigate(['/auth']);
    return isAuthenticated;
  }
}
