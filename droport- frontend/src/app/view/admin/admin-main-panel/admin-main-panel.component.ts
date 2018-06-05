import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from "../../../services/request.service";




@Component({
  selector: 'app-admin-main-panel',
  templateUrl: './admin-main-panel.component.html',
  styleUrls: ['./admin-main-panel.component.css']
})


export class AdminMainPanelComponent implements OnInit {

  
  constructor(
    private RequestService: RequestService, 
    
  ) { }

// Variables 
  all_req_arr = [];
  pending_req_arr = [];
  completed_req_arr = []


// When Component loding 
  ngOnInit() {
    // //LOAD completed Requests
    this.RequestService.getAll_Requests().subscribe(res=>this.all_req_arr=res)
    console.log("printing all")
    console.log(this.all_req_arr)
  }
  

// 
  getRequest(id:number){
    console.log("get data function called")
    this.RequestService.getRequest_byID(id).subscribe(res=>this.all_req_arr=res)
    console.log(this.all_req_arr)
  }
  
    

  
  























}

