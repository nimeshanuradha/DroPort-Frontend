import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-own-pil-sel',
  templateUrl: './own-pil-sel.component.html',
  styleUrls: ['./own-pil-sel.component.css']
})
export class OwnPilSelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //#############################

  
  pil_data_1 =  [1000, 'Ravindu', 'Perera', '1995-12-29', '953640465v', 22, 724788122, 112578629, 'male', 'ravinduperera1229@gmail.com'],
  pil_data_2 =  [1001, 'Nimesh', 'Anuradha', '1993-03-03', '930911227v', 25, 713462038, 112467461, 'male', 'nimedhanurada1500@gmail.com'],
  pil_data_3 =  [1002, 'Kaushalya', 'Prasadini', '1994-04-30', '941227984v', 24, 766598222, 113556814, 'female', 'kaushalyaprasadini94@gmail.com']
  ]

  

}
