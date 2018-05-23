import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { $ } from 'protractor';
import { HttpClient} from '@angular/common/http'
import {  } from "@angular/core";

@Component({
  selector: 'app-own-reg',
  templateUrl: './own-reg.component.html',
  styleUrls: ['./own-reg.component.css']
})
export class OwnRegComponent implements OnInit {

  data_arr: any[]
  

  constructor(private http: HttpClient){}

  ngOnInit() {
  }
  
  
  get_owner_data():void {
    
  } 

 
}

