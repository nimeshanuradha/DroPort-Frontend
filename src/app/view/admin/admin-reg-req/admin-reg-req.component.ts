import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin-reg-req',
  templateUrl: './admin-reg-req.component.html',
  styleUrls: ['./admin-reg-req.component.css']
})
export class AdminRegReqComponent implements OnInit {

  // Sample Data

  cus = [
    {"name": "Nimesh",
    "district":"Colombo",
    "age":"25",
    "birthday":"1993-11-15",
    "nic":"19933201490",
    "phone_mob":"0713463038"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
