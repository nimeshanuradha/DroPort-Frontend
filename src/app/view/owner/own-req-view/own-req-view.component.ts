import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { RequestService } from "../../../services/request.service";

@Component({
  selector: 'app-own-req-view',
  templateUrl: './own-req-view.component.html',
  styleUrls: ['./own-req-view.component.css']
})
export class OwnReqViewComponent implements OnInit {

  constructor(
    private RequestService: RequestService,
    private Activated_router: ActivatedRoute,
    private router:Router

  ) { }


  url_req_id
  req_data_arr = []
  req_id = 45 // this.req_data_arr[0]
  own_id = 85 //to be collect from session data
  selected_pil = localStorage.getItem("selected_pil")
  

  fly_by_me: boolean = false

  ngOnInit() {
    this.Activated_router.params.subscribe(id => this.url_req_id = id)
    console.log("id in ts file " + this.url_req_id.id)
    this.RequestService.getRequest_byID(this.url_req_id.id).subscribe(res => this.req_data_arr = res)
  }

  fly_myself() {
    this.fly_by_me = !this.fly_by_me
  }

  data = [this.req_id, this.own_id]
  
  accept_self_pil(data) {
    this.RequestService.Assign_own_as_pil(data)
  }

  find_pilot(district, town) {
    console.log(district, town);
    localStorage.setItem("drn_sel_district", district)
    localStorage.setItem("drn_sel_town", town)
    

    this.router.navigate(['/own_pil_sel'])
  }

  conf_by_own(){





    // MUST DELETE LOCALSTORAGE AT THE END
    localStorage.removeItem("drn_sel_district")
    localStorage.removeItem("drn_sel_town")
    localStorage.removeItem("selected_pil")


  }

  

  

}
