import { Component, OnInit, Input} from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-own-pil-sel',
  templateUrl: './own-pil-sel.component.html',
  styleUrls: ['./own-pil-sel.component.css']
})
export class OwnPilSelComponent implements OnInit {

  pil_data_arr = []
  selected_pil= ""


  district = localStorage.getItem('drn_sel_district')
  town = localStorage.getItem('drn_sel_town')

  constructor(
    private UserService: UserService,
    private router:Router,
    private location:Location
  ) { 
    
  }

  ngOnInit() {
    

    this.UserService.getPilot_byDistrictTown(this.district,this.town).subscribe(res=>{
      console.log("got response",res);
      this.pil_data_arr = res
      
    })


  }

  set_pil(pil_id){
    this.selected_pil = pil_id
  }

  conf_pil(selected_pil){
    localStorage.setItem("selected_pil",selected_pil)
    this.location.back()

  }




  

  

}
