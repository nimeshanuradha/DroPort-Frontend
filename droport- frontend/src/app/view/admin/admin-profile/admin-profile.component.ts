import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  //form variables

  f_name = "admin nimesh"
  x="false"
  username = "admin_name"
  adm_id = 1354

  show_change = false



  constructor() { }

  ngOnInit() {
  }


  show_change_pw(){
    this.show_change = !this.show_change

  }
}
