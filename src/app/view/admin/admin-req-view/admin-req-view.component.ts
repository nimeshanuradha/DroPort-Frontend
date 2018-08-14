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

  req_id:any
  req_data = []

  constructor(
    private router: ActivatedRoute,
    private RequestService : RequestService
  
  ) { }

    
  ngOnInit() {
    //this.router.params.subscribe(id => this.req_id = id)
    let nid = this.router.snapshot.paramMap.get(this.req_id)
    console.log("on init  function called")
    this.RequestService.getRequest_byID(this.req_id).subscribe(res=>this.req_data=res)
    console.log(this.req_data)
    
  } 
}
