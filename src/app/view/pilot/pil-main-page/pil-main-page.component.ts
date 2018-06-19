import { Component, OnInit } from '@angular/core';
import { UserService} from "../../../services/user.service";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pil-main-page',
  templateUrl: './pil-main-page.component.html',
  styleUrls: ['./pil-main-page.component.css']
})
export class PilMainPageComponent implements OnInit {
  user_id:number
  pil_data = []

  constructor(
    router: ActivatedRoute,
    private UserService : UserService
  ) {
    router.params.subscribe(user_id=>this.user_id)
   }

  ngOnInit() {
    console.log("on init  function called")
    this.UserService.getPilot_byID(this.user_id).subscribe(res=>this.pil_data=res)
    console.log(this.pil_data)
  }

}
