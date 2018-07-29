
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Http, Response, Headers} from "@angular/http";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http:Http) { }
  option_preview = false;

  ngOnInit(){
    
  };

  toggle_option(){
    this.option_preview = !this.option_preview
   };

  post_login_data(login: NgForm):void{
    console.log('login calle on front end')
    const data_arr = login.value;
    const username = data_arr.username
    const password = data_arr.password

    if (username=="nimesh" && password=="123") {
      console.log('login using '+ username)
      console.log('login using '+ password)
    }
  };

};


