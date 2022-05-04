import { AccountService } from './account.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private accountService: AccountService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean  {
    
    if (this.accountService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      this.accountService.showMessage("Sessão expirada, faça login novamente!", true);
      return false;
    }
  }
  
}
