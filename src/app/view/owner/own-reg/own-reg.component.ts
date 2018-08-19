import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import { Owner } from "../../../models/user";
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-own-reg',
  templateUrl: './own-reg.component.html',
  styleUrls: ['./own-reg.component.css']
})
export class OwnRegComponent implements OnInit {

  data_arr: any[];
  
  

  constructor(
    
    private UserService: UserService,
    private router: Router

  ){}

  ngOnInit() {
  }

  post_owner_data(own_reg: NgForm){

    const form_data = own_reg.value
    this.UserService.POST_New_own(form_data).subscribe(res=>{
      console.log("got response",res);
        this.router.navigate(['/own_main_page']);

    })

  } 

 
}

