import { Injectable } from '@angular/core';
import { Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'; // solved using installing "rxjs-compat" 
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class RequestService {

  private _url : string = '/req/'


  constructor(private _http: Http) { }  


  getRequests(){
    console.log("getRequest called")
    return this._http.get(this._url+"asd")
    .map((res: Response)=> res.json())
  }
  
    


}
 