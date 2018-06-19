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
    private route: ActivatedRoute,
    private RequestService: RequestService
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
