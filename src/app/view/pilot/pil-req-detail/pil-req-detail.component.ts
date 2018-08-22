import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { RequestService } from '../../../services/request.service';

@Component({
  selector: 'app-pil-req-detail',
  templateUrl: './pil-req-detail.component.html',
  styleUrls: ['./pil-req-detail.component.css']
})
export class PilReqDetailComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private RequestService: RequestService,
  ) { }

  req_id: any
  req_data: any

  ngOnInit() {
    this.router.params.subscribe(res => this.req_id = res.req_id)
    console.log("on init  function called")
    this.RequestService.getRequest_byID(this.req_id).subscribe(res => {
      this.req_data = res;
      console.log(this.req_data[0]);

    })
  }

}
