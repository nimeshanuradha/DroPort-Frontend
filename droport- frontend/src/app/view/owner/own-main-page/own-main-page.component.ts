import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../../services/request.service";

@Component({
  selector: 'app-own-main-page',
  templateUrl: './own-main-page.component.html',
  styleUrls: ['./own-main-page.component.css']
})
export class OwnMainPageComponent implements OnInit {

  all_pending_req_arr = []

  constructor(
    private RequestService: RequestService
  ) { }

  ngOnInit() {

    this.RequestService.getAll_PendingRequests().subscribe(res => this.all_pending_req_arr = res)

    

  }


}
