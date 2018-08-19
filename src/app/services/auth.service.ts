import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  user:any
  // loggedIn = localStorage.getItem('loggedIn')

  constructor() { 

  }

  isAuthenticated(){

    if(localStorage.getItem('loggedIn')){
      var f_name = localStorage.getItem('f_name')
      var l_name = localStorage.getItem('l_name')
      this.user = f_name+" "+l_name
      return this.user
    }
    if(!localStorage.getItem('loggedIn')){
      return false
      
    }

    

  }



}
