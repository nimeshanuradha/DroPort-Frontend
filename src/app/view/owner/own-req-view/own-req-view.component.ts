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
  req_id = 45 //this.req_data_arr[0]
  own_id = 85 //to be collect from session data

  fly_by_me:boolean = false

  ngOnInit() {
    this.route.params.subscribe(id => this.url_req_id = id)
    console.log( "id in ts file " + this.url_req_id.id)
    this.RequestService.getRequest_byID(this.url_req_id.id).subscribe(res => this.req_data_arr=res)
  }

  fly_myself(){
    this.fly_by_me = !this.fly_by_me
  }

  data = [this.req_id,this.own_id]
  accept_self_pil(data){
    this.RequestService.Assign_own_as_pil(data)
  }

}
