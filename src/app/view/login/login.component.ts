
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

  // post_login_data(login: NgForm):void{
  //   console.log('login')
  //   const data_arr = login.value;
  //   const username = data_arr.username
  //   const password = data_arr.password

  //   if (username=="nimesh" && password=="123") {
  //     console.log('login using '+ username)
  //     console.log('login using '+ password)
  //   }
  // };

  add_to_db(login: NgForm){
    console.log("add_to_db called on client")
    var username = login.value.username
    var password = login.value.password
    //var formData = JSON.stringify({"username": username,"password": password})
    //var data = JSON.stringify({"username": username,"password": password})
    //console.log("this is from client ",data)
    this._http.post("/req/zxc",{
      "username": username,
      "password": password
    })
      .subscribe(res=>{console.log(res.status)})
  };
    

};


