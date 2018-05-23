import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cus-new-req',
  templateUrl: './cus-new-req.component.html',
  styleUrls: ['./cus-new-req.component.css']
})

export class CusNewReqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  get_req_data(cus_new_req: NgForm):void{
    console.log(cus_new_req.value)
  }

}




