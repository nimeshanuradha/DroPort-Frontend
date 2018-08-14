import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-admin-reg-owners',
  templateUrl: './admin-reg-owners.component.html',
  styleUrls: ['./admin-reg-owners.component.css']
})
export class AdminRegOwnersComponent implements OnInit {

  all_own_arr = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

    this.userService.getAll_Owners().subscribe(res=>this.all_own_arr= res)
  }

}
