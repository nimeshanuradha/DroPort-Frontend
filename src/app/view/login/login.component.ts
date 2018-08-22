
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { UserService } from "../../services/user.service";
import { nextTick } from '../../../../node_modules/@types/q';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private router: Router
  ) {
    var loggedIn = localStorage.getItem("loggedIn")
    var user_type = localStorage.getItem("user_type")
    console.log(user_type);

    if (loggedIn) {
      switch (user_type) {
        case "customer":
          router.navigate(["./cus_new_req"])
          break;

        case "admin":
          router.navigate(["./admin_main_panel"])
          break;

        case "pilot":
          router.navigate(["./pil_main_page"])
          break;

        case "owner":
          router.navigate(["./own_main_page"])
          break;
      }
    } else {
      router.navigate(["./login"])
    }
  }

  option_preview = false;
  user_info: any

  ngOnInit() {
  };

  toggle_option() {
    this.option_preview = !this.option_preview
  };

  post_login_data(login: NgForm): void {

    const user_data = login.value;
    console.log('login calle on front end', user_data)

    this.UserService.log_User(user_data).subscribe(res => {

      console.log("res.success = ",res.success);
      this.user_info = res.user
      
      if (!res.success) {
        console.log("res.message = ",res.message);
      } else {
        console.log("res.message = ",res.message);
        
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("f_name", this.user_info.f_name);
        localStorage.setItem("l_name", this.user_info.l_name);
        localStorage.setItem("user_type", this.user_info.user_type);
        localStorage.setItem("user_id", this.user_info.user_id);

        switch (this.user_info.user_type) {
          case "customer":
            this.router.navigate(["./cus_new_req"])
            break;

          case "admin":
            this.router.navigate(["./admin_main_panel"])
            break;

          case "pilot":
            this.router.navigate(["./pil_main_page"])
            break;

          case "owner":
            this.router.navigate(["./own_main_page"])
            break;
        }


      }

    });




  };

};


