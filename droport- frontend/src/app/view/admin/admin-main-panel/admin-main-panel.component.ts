import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-main-panel',
  templateUrl: './admin-main-panel.component.html',
  styleUrls: ['./admin-main-panel.component.css']
})
export class AdminMainPanelComponent implements OnInit {

  user = "Nimesh"
  cus_id = "456"
  own_id = "123"
  pil_id = "789"
  req_id = "741"

  constructor() { }

  ngOnInit() {
  }

  show_req(){
    
  }






}

