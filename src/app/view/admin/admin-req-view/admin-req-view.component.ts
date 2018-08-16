import { Component, OnInit } from '@angular/core';
import { RequestService  } from "../../../services/request.service";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JSONPBackend } from '../../../../../node_modules/@angular/http';

@Component({
  selector: 'app-admin-req-view',
  templateUrl: './admin-req-view.component.html',
  styleUrls: ['./admin-req-view.component.css']
})
export class AdminReqViewComponent implements OnInit {

  req_id:any
  req_data:any

  constructor(
    private router: ActivatedRoute,
    private RequestService : RequestService,
  
  
  ) { }

    
  ngOnInit() {
    this.router.params.subscribe(res => this.req_id = res.req_id)
    console.log("on init  function called")
    this.RequestService.getRequest_byID(this.req_id).subscribe(res=>{
      this.req_data=res;
      console.log(this.req_data[0]);
      
    })
  } 
}
