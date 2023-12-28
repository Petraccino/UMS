import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {
  auth: AuthService = inject(AuthService);
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.auth.isUserLogin()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }

  }

  

}
