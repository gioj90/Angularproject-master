import { Injectable } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable({
  providedIn:'root'
})

export class AuthGuard {

  constructor(private authServise: AuthService, private route: Router){}

  canAcitivate(){
    if(this.authServise.isLogedIn())
      return true
    this.route.navigateByUrl('/log-in')
    return false
  }
  


  // return true;
};
