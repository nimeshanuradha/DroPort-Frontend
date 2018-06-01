import { Component, OnInit } from '@angular/core';
import { Request } from "../../../models/request";
import { CommonModule } from '@angular/common';
import { RequestService } from "../../../services/request.service";
import { Http, Response, Headers} from "@angular/http";

@Component({
  selector: 'app-admin-main-panel',
  templateUrl: './admin-main-panel.component.html',
  styleUrls: ['./admin-main-panel.component.css']
})


export class AdminMainPanelComponent implements OnInit {

  user = "Nimesh"
  cus_id = "456"
  own_id = "123"
  pil_id = "789"
  req_id = "741"
  req_arr=[
            {req_id: 1,district:'colombo',town:'piliyandala', area:'madapatha', date:'2018-05-23', time:'13:15:00', cus_id:10000},
            {req_id:2,district: 'colombo',town: 'kolonnawa',area: 'kotikawatta',date: '2018-05-24',time: '13:28:00',cus_id:100001}
          ];


  requests = [];
  constructor(private _requestService: RequestService, private _http: Http) { }
  //constructor(private _http: Http) { }  

  ngOnInit() {
  }

  getdata(){
    console.log("get data function called")
    this._requestService.getRequests()
    .subscribe(resRequestData =>this.requests=resRequestData)
    console.log(this.requests)
  }

  getRequests(){
    console.log("getRequests called" )
    this._http.get('http://localhost:4200/admin_profile')
    //.map((res: Response)=> res.json())
  }
  

}

