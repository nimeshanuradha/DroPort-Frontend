import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http'
import { Owner } from "../../../models/user";

@Component({
  selector: 'app-own-reg',
  templateUrl: './own-reg.component.html',
  styleUrls: ['./own-reg.component.css']
})
export class OwnRegComponent implements OnInit {

  data_arr: any[];
  
  

  constructor(
    private http: HttpClient
  ){}

  ngOnInit() {
  }
  
  

  get_owner_data(own_reg: NgForm):void{
    
    const from_data = own_reg.value
    console.log(from_data.fname)

  } 

 
}

