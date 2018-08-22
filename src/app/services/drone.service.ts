import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
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

  get_Drones_combined(drone_data){
    return this.http.post("http://localhost:3000/api/drn/combined",drone_data).map((res:Response)=>res.json())

  }


    //POST New Drone
  post_NewDrone(drone_data){
      console.log("post_NewDrone called")
      return this.http.post("http://localhost:3000/api/drn/new_drone",drone_data).map((res:Response)=>res.json())
    }
      



}
