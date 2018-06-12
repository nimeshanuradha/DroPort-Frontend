import { Component, OnInit } from '@angular/core';
import { RequestService  } from "../../../services/request.service";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-req-view',
  templateUrl: './admin-req-view.component.html',
  styleUrls: ['./admin-req-view.component.css']
})
export class AdminReqViewComponent implements OnInit {

  req_id:number
  req_data = []

  constructor(
    router: ActivatedRoute,
    private RequestService : RequestService
  
  ) { 
    router.params.subscribe(req_id=>this.req_id)
  }

    
  ngOnInit() {

    console.log("on init  function called")
    this.RequestService.getRequest_byID(this.req_id).subscribe(res=>this.req_data=res)
    console.log(this.req_data)
    
  }










}
