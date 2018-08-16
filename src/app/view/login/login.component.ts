
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Http, Response, Headers} from "@angular/http";
import { UserService } from "../../services/user.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http:Http,
    private UserService:UserService) { }

  option_preview = false;
  user_info: any

  ngOnInit(){
  };

  toggle_option(){
    this.option_preview = !this.option_preview
   };

  post_login_data(login: NgForm):void{
    
    const user_data = login.value;
    console.log('login calle on front end',user_data)
   

    this.UserService.log_User(user_data).subscribe(res=>console.log(res));
    
    
  };

};


