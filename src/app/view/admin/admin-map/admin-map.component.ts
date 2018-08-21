import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService} from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-map',
  templateUrl: './admin-map.component.html',
  styleUrls: ['./admin-map.component.css']
})
export class AdminMapComponent implements OnInit {

  constructor(
    private UserService : UserService,
    private router : Router
  ) { 
    
  }

  restricted_area = []

  ngOnInit() {

    this.UserService.get_area().subscribe(restricted_area => this.restricted_area=restricted_area);
  }


  get_area_data(new_area: NgForm){
    console.log('sending :', new_area.value)
    var area_data = new_area.value

    //this.http.post("/api/req/new",data).subscribe(res=>(res.status))

    this.UserService.post_NewArea(area_data).subscribe(res=>console.log("Successfully added"))

  }


  addArea(){
    this.router.navigate(['/admin_map']);
    return false;
  }
}
