import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { ServiceGeneralService } from '../services/service-general.service';

@Injectable({
  providedIn: 'root'
})
export class GuardRoleGuard implements CanActivate {
  private edtions$: ReplaySubject<any> = new ReplaySubject(1)
  constructor(
    private router: Router,
    private accountApi: ServiceGeneralService
  ){
  /*   this.accountApi.getEditions()= this.edtions$ */
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
      /* if (this.accountApi.getEditions()==null) {
        return false;
      }else{
        this.router.navigate(['/lessons/0']);
      }; */
  }
  
}
