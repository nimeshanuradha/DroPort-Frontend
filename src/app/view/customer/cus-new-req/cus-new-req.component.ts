import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestService } from "../../../services/request.service";
import { DroneService } from '../../../services/drone.service';


@Component({
  selector: 'app-cus-new-req',
  templateUrl: './cus-new-req.component.html',
  styleUrls: ['./cus-new-req.component.css']
})

export class CusNewReqComponent implements OnInit {

  all_drone_arr = []
  dro_id: Number

  

  constructor(
  
    private RequestService: RequestService,
    private droneService:DroneService
  ) { }

  drone_select : boolean = false

  ngOnInit() {
    this.droneService.getAll_Drones().subscribe(res=>console.log(this.all_drone_arr=res))
 
  }


  get_req_data(cus_new_req: NgForm){
    console.log('sending :', cus_new_req.value)
    var req_data = cus_new_req.value

    //this.http.post("/api/req/new",data).subscribe(res=>(res.status))

    this.RequestService.post_NewRequest(req_data).subscribe(res=>console.log("Successfully added"))

  }
  

  drone_selected(){
    this.drone_select = !this.drone_select
  }

  set_drone(drone){
    this.dro_id = drone
  }

}