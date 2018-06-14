import { Injectable } from '@angular/core';
import { Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'; 

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  getAll_Customers(){
    console.log("getAll_Customers called")
    return this.http.get("/api/user/cus").map((res: Response)=> res.json())
  };

  getAll_Pilots(){
    console.log("getAll_Pilots called")
    return this.http.get("/api/user/pil").map((res: Response)=> res.json())
  };

  getAll_Owners(){
    console.log("getAll_Owners called")
    return this.http.get("/api/user/own").map((res: Response)=> res.json())
  };

  getAll_Admins(){
    console.log("getAll_Admins called")
    return this.http.get("/api/user/admin").map((res: Response)=> res.json())
  };

  getCustomer_byID(id:any){
    console.log("getCustomer_byID called")
    return this.http.get("/api/user/cus/:id").map((res: Response)=>res.json())
  };

  getPilot_byID(id:any){
    console.log("getCustomer_byID called")
    return this.http.get("/api/user/pil/:id").map((res: Response)=>res.json())
  };

  getOwner_byID(id:any){
    console.log("getCustomer_byID called")
    return this.http.get("/api/user/own/:id").map((res: Response)=>res.json())
  };

  getAdmin_byID(id:any){
    console.log("getCustomer_byID called")
    return this.http.get("/api/user/admin/:id").map((res: Response)=>res.json())
  };


}
