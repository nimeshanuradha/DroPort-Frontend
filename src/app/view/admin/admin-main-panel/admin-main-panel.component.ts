import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../../services/request.service";
import {Router  } from "@angular/router";




@Component({
  selector: 'app-admin-main-panel',
  templateUrl: './admin-main-panel.component.html',
  styleUrls: ['./admin-main-panel.component.css']
})


export class AdminMainPanelComponent implements OnInit {

  
  constructor(
    private RequestService: RequestService, 
    private router: Router
    
  ) { 
  var loggedIn = localStorage.getItem('loggedIn')
  if(!loggedIn){
    this.router.navigate(["/login"])
  }
  }

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

  get_data(){
    console.log('get_data called')
  }

// 
 
  
    

  
  























}

