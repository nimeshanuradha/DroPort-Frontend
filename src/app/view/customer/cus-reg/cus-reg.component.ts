import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from "../../../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cus-reg',
  templateUrl: './cus-reg.component.html',
  styleUrls: ['./cus-reg.component.css']
})
export class CusRegComponent implements OnInit {


  constructor(
    private UserService :UserService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  get_cus_data(cus_reg:NgForm){

    var cus_data =  cus_reg.value

    console.log(cus_data)
    this.UserService.POST_New_cus(cus_data).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('/cus_new_req');
      });

    //this.UserService.POST_New_pil(pil_reg).subscribe(res=>(res.status))
    
  } 
}
