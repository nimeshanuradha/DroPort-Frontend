import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pil-todo-detail',
  templateUrl: './pil-todo-detail.component.html',
  styleUrls: ['./pil-todo-detail.component.css']
})
export class PilTodoDetailComponent implements OnInit {
  showdiv = false;
  constructor() { }

 flyPeriod(){
   this.showdiv = !this.showdiv;
 } 

  ngOnInit() {
  }

}
