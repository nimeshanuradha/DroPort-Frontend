import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {  } from "rxjs";
import { DroneService } from '../../../services/drone.service';



@Component({
  selector: 'app-cus-drn-select',
  templateUrl: './cus-drn-select.component.html',
  styleUrls: ['./cus-drn-select.component.css']
})
export class CusDrnSelectComponent implements OnInit {

  all_drone_arr =[]

  constructor(
    private http :Http,
    private droneService: DroneService
  ) { }

  ngOnInit() {

    this.droneService.getAll_Drones().subscribe(res=>console.log(this.all_drone_arr=res))
  }

  

}