import { Component } from '@angular/core';
import { RequestService } from "./services/request.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestService]
})

export class AppComponent {

  
}
