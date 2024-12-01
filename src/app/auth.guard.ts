import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './services/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthserviceService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.authService.getLoggedInUser();
    if (user) {
      const requiredRole = route.data['role'];
      if (!requiredRole || user.type === requiredRole) {
        return true;
      }
      this.router.navigate(['/home']); // Redirige si el rol no coincide
      return false;
    }
    this.router.navigate(['/iniciar sesion']);
    return false;
  }
}

