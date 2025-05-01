import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthorized = true

  login(){
    this.isAuthorized = true
  }

  logUot(){
    this.isAuthorized = false
  }

  isLogedIn(){
    return this.isAuthorized
  }
}
