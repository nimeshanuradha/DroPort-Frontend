import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lng: number = 79.8606384;
  lat: number = 6.92154;

  constructor() { }

  ngOnInit() {
  }

}
