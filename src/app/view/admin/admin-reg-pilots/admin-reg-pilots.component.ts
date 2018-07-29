import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-admin-reg-pilots',
  templateUrl: './admin-reg-pilots.component.html',
  styleUrls: ['./admin-reg-pilots.component.css']
})
export class AdminRegPilotsComponent implements OnInit {

  all_pil_arr =[];

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.userService.getAll_Pilots().subscribe(res=>this.all_pil_arr = res)
  }

}
