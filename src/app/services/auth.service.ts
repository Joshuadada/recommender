import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // I started code from here
  login(uname: string, pword: string){
    if (uname === 'josh' && pword == '12345678'){
      return 200;
    } else {
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login'])
  }
}
