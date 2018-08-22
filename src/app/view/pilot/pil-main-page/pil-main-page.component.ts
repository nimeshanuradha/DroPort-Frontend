import { Component, OnInit } from '@angular/core';
import { UserService} from "../../../services/user.service";

import { RequestService } from '../../../services/request.service';


@Component({
  selector: 'app-pil-main-page',
  templateUrl: './pil-main-page.component.html',
  styleUrls: ['./pil-main-page.component.css']
})
export class PilMainPageComponent implements OnInit {
  
  // Variables 
  all_req_arr = [];
  pending_req_arr = [];
  completed_req_arr = []

  constructor(
    private RequestService:RequestService
  
  ) {}

  ngOnInit() {
    var pil_id = localStorage.getItem("user_id")

    this.RequestService.get_pilot_upcoming_Requests(pil_id).subscribe(res=>this.all_req_arr=res)
    console.log("printing all")
    console.log(this.all_req_arr)  

  }

}
