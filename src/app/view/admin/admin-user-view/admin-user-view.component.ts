import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.component.html',
  styleUrls: ['./admin-user-view.component.css']
})
export class AdminUserViewComponent implements OnInit {

  constructor(
    private router:ActivatedRoute,

  ) { }

  ngOnInit() {

    this.router.params.subscribe(res=>console.log(res));
    

  }

}
