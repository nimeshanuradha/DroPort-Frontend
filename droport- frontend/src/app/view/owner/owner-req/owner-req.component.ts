import { Component, OnInit } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from "@angular/router";
import { RequestService } from "../../../services/request.service";

@Component({
  selector: 'app-owner-req',
  templateUrl: './owner-req.component.html',
  styleUrls: ['./owner-req.component.css']
})
export class OwnerReqComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private RequestService : RequestService
  ) { }

  req_id
  req_data_arr=[]

  ngOnInit() {
    this.route.params.subscribe(id=>this.req_id=id)
    console.log(this.req_id)
    this.RequestService.getRequest_byID(this.req_id).subscribe(res=>this.req_data_arr=res)
    console.log(this.req_data_arr)
  }

}
