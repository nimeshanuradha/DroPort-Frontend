import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { Http } from '@angular/http';
import {  } from "rxjs";
import { DroneService } from '../../../services/drone.service';
import { Location } from '@angular/common';
import { DataService } from '../../../services/data.service';



@Component({
  selector: 'app-cus-drn-select',
  templateUrl: './cus-drn-select.component.html',
  styleUrls: ['./cus-drn-select.component.css']
})
export class CusDrnSelectComponent implements OnInit {


  all_drone_arr =[]
  selected_drn

  constructor(
    private http :Http,
    private droneService: DroneService,
    private location: Location,
    private dataService: DataService

  ) { }

  ngOnInit() {

    //this.droneService.getAll_Drones().subscribe(res=>console.log(this.all_drone_arr=res))

  }

  set_drn(dro_id){
    console.log("dron set in drn select",dro_id);
    
    this.selected_drn=dro_id
    
    
  }
  conf_dron(dro_id){
    this.droneService.getAll_Drones().subscribe(res=>console.log(this.all_drone_arr=res))
    
    // this.dataService.change_drone_id(dro_id)
    // // this.location.back()
    // console.log("confirmed",dro_id);
    
  }

  

}
