import { Injectable } from '@angular/core';
import { Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'; 

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  log_User(user_data){
    console.log("getAll_Customers called")
    return this.http.post("http://localhost:3000/api/auth/login",user_data).map((res: Response)=> res.json())
  };

  getAll_Customers(){
    console.log("getAll_Customers called")
    return this.http.get("http://localhost:3000/api/user/cus").map((res: Response)=> res.json())
  };

  getAll_Pilots(){
    console.log("getAll_Pilots called")
    return this.http.get("http://localhost:3000/api/user/pil").map((res: Response)=> res.json())
  };

  getAll_Owners(){
    console.log("getAll_Owners called")
    return this.http.get("http://localhost:3000/api/user/own").map((res: Response)=> res.json())
  };

  getAll_Admins(){
    console.log("getAll_Admins called")
    return this.http.get("http://localhost:3000/api/user/admin").map((res: Response)=> res.json())
  };

  getCustomer_byID(id:any){
    console.log("getCustomer_byID called")
    return this.http.get("http://localhost:3000/api/user/cus/:id").map((res: Response)=>res.json())
  };

  getPilot_byID(id:any){
    console.log("getPilot_byID called")
    return this.http.get("http://localhost:3000/api/user/pil/:id").map((res: Response)=>res.json())
  };

  getPilot_byDistrictTown(district:any,town:any){
    console.log("getPilot_byID called")
    return this.http.post("http://localhost:3000/api/user/pil/combined",{district:district,town:town}).map((res: Response)=>res.json())
  };

  getOwner_byID(id:any){
    console.log("getCustomer_byID called")
    return this.http.get("http://localhost:3000/api/user/own/:id").map((res: Response)=>res.json())
  };

  getAdmin_byID(id:any){
    console.log("getCustomer_byID called")
    return this.http.get("http://localhost:3000/api/user/admin/:id").map((res: Response)=>res.json())
  };


  POST_New_pil(pil_data){
    console.log("POST_New_pil called")
    return this.http.post("http://localhost:3000/api/user/pil/new",pil_data)
  }

  POST_New_cus(cus_data){
    console.log("POST_New_cus called")
    return this.http.post("http://localhost:3000/api/user/cus/new",cus_data)
  }

  POST_New_own(own_data){
    console.log("POST_New_cus called")
    return this.http.post("http://localhost:3000/api/user/own/new",own_data)
  }

  post_NewArea(area_data){
    console.log("new area called")
    return this.http.post("http://localhost:3000/api/user/new_area",area_data).map((res:Response)=>res.json())
  }


  get_area(){
    console.log("getArea called")
    return this.http.get("http://localhost:3000/api/user/getArea").map((res: Response)=> res.json())
  }

}

