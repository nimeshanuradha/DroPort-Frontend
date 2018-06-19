import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pil-reg',
  templateUrl: './pil-reg.component.html',
  styleUrls: ['./pil-reg.component.css']
})
export class PilRegComponent implements OnInit {
  username:string;
  constructor(
    private UserService : UserService,
    private http: Http,
    public router: Router
  ) { }

  ngOnInit() {
    
  }

  get_pilot_data(pil_reg:NgForm){

    var pil_data =  pil_reg.value

    console.log(pil_data)
    this.UserService.POST_New_pil(pil_data).subscribe(
      (res) => {
        console.log(res);
        this.router.navigateByUrl('/pil_main_page');
      });

    //this.UserService.POST_New_pil(pil_reg).subscribe(res=>(res.status))
    
  } 

}
