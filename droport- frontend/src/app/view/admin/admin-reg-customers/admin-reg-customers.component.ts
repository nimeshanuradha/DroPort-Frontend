import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../../services/user.service";

@Component({
  selector: 'app-admin-reg-customers',
  templateUrl: './admin-reg-customers.component.html',
  styleUrls: ['./admin-reg-customers.component.css']
})
export class AdminRegCustomersComponent implements OnInit {

  all_reg_cus = []

  constructor(
    private UserService : UserService
  ) { }

  ngOnInit() {

    this.UserService.getAll_Customers().subscribe(res=>this.all_reg_cus=res)
    console.log(this.all_reg_cus)
  }

}
