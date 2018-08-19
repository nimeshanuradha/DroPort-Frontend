import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DroneService} from '../../../services/drone.service';

@Component({
  selector: 'app-drone-reg',
  templateUrl: './drone-reg.component.html',
  styleUrls: ['./drone-reg.component.css']
})
export class DroneRegComponent implements OnInit {

  constructor(
    public router: Router,
    public DroneService: DroneService,

  ) { }

  ngOnInit() {
  }

  get_new_drone(new_drone_reg: NgForm){
    console.log('sending :', new_drone_reg.value)
    var drone_data = new_drone_reg.value
    
    this.DroneService.post_NewDrone(drone_data).subscribe(res=>console.log("Successfully added"))

  }

}
