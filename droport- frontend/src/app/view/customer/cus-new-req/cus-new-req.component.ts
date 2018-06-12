import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cus-new-req',
  templateUrl: './cus-new-req.component.html',
  styleUrls: ['./cus-new-req.component.css']
})

export class CusNewReqComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }


  get_req_data(cus_new_req: NgForm):void{
    console.log('sending :', cus_new_req.value)
    var data = cus_new_req.value

    this.http.post("/api/req/new",data).subscribe(res=>(res.status))

  }

}




