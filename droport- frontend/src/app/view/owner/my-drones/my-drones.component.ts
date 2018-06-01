import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-drones',
  templateUrl: './my-drones.component.html',
  styleUrls: ['./my-drones.component.css']
})
export class MyDronesComponent implements OnInit {

  drone_type = "Supiri Drone"
  constructor() { }

  ngOnInit() {
  }

}
