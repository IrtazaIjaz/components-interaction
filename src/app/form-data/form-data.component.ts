import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {SharedService} from './../service/shared.service'

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  // email: string;
  // age: number;
  constructor(private shareService:SharedService) { 
    debugger;
    console.log(this.shareService.email);
    console.log(this.shareService.age);}

  ngOnInit() {
  }

  store_data(myform: NgForm)
  {
    debugger;
    this.shareService.email=myform[0].value;
    console.log(this.shareService.email);
    this.shareService.age=myform[1].value;
    console.log(this.shareService.age);
  }
  

}
