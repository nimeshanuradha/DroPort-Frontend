import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }

  private drone_select_source = new BehaviorSubject(0)
  current_drone_id = this.drone_select_source.asObservable();

  change_drone_id(new_drone_id:number) {
    console.log("in service chnage fun",new_drone_id);
   
    // console.log( this.drone_select_source.next(new_drone_id));
    
    this.drone_select_source.next(new_drone_id)
  }






}
