



// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { Observable } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';

// @Injectable({
//   providedIn: 'root'
// })
// export class authguardGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router,private toaster:ToastrService) { }
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
// Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//       if (1===1) {
//       this.toaster.success("login succesfully from guard");

//       this.router.navigate(['/dashboard']);

//       return true;
//     } else {
     
//       this.router.navigate(['/login']);
//       this.toaster.warning("wothout login u no no cant access")

//       return false;


//     }
//   }


   
//   }


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
// import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class authguardGuard implements CanActivate {
  constructor(private router: Router,private authService: AuthService,private toaster:ToastrService){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('CanActivate called');
    if ( this.authService.IsLogginGuard){

      return true
    } else {
      this.toaster.warning("Access denied");
      this.router.navigate(['/login']);



      return false
    }
  }
  
} 