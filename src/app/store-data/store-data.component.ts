import { Component, OnInit } from '@angular/core';
import {SharedService} from './../service/shared.service'

@Component({
  selector: 'app-store-data',
  templateUrl: './store-data.component.html',
  styleUrls: ['./store-data.component.css']
})
export class StoreDataComponent implements OnInit {

  constructor(private shareService: SharedService) { 
    debugger;
    console.log(this.shareService.email);
    console.log(this.shareService.age);
  }

  ngOnInit() {
  }


}
