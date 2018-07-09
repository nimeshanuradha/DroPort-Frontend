import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Injectable()
export class DroneService {
  private drone = new BehaviorSubject<any>("asd")
  cast = this.drone.asObservable()

  constructor(
    private http:Http
  ) { }


  getAll_Drones(){
    return this.http.get('http://localhost:3000/api/drn/all').map(res=>res.json())
  }



}
