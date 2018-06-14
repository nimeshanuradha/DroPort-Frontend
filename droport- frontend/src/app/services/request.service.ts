import { Injectable } from '@angular/core';
import { Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'; // solved using installing "rxjs-compat" 

@Injectable()
export class RequestService {

  constructor(private http: Http) { }  

  //GET all requests
    getAll_Requests(){
      console.log("getRequest called")
      return this.http.get("/api/req/all").map((res: Response)=> res.json())
    };

  //GET All pending Requests
    getAll_PendingRequests(){
      console.log("getAll_PendingRequests called")
      return this.http.get("/api/req/all_pending").map((res: Response)=> res.json())
    };

  //GET All completed Requests
    getAll_CompletedRequests(){
      console.log("getAll_CompletedRequests called")
      return this.http.get("/api/req/all-completed").map((res: Response)=> res.json())
    };


  //GET request by id
    getRequest_byID(id:number){
      console.log("getRequest_byID called")
      return this.http.get("/api/req/:id").map((res: Response)=>res.json())
    };


  //GET Last req_id
    getLast_RequestID(){
      console.log("getLast_RequestID called")
      return this.http.get("/api/req/last_id").map((res)=>res.json())
    }
    

}
 