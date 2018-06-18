import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RequestService } from "../../../services/request.service";

@Component({
  selector: 'app-own-req-view',
  templateUrl: './own-req-view.component.html',
  styleUrls: ['./own-req-view.component.css']
})
export class OwnReqViewComponent implements OnInit {

  constructor(
    private RequestService : RequestService,
    private route: ActivatedRoute
  ) { }


  url_req_id
  req_data_arr = []
  req_id

  ngOnInit() {
    this.route.params.subscribe(id => this.url_req_id = id)
    console.log( "id in ts file " + this.url_req_id.id)
    this.RequestService.getRequest_byID(this.url_req_id.id).subscribe(res => this.req_data_arr=res)
  }

}
