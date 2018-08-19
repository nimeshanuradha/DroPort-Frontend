import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any
  loggedIn = localStorage.getItem('loggedIn')

  constructor(
    public authService: AuthService
  ) {
    
  }
 
  ngOnInit() { 
    this.user= this.authService.isAuthenticated()
  }            

  logout(){
    console.log("log Out called");
    localStorage.clear()
  }

  isLogged() {
    return this.authService.isAuthenticated();
  }

}
