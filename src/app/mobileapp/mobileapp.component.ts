import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }
  Testing(){
    var name = $("#txtName").val();
    alert(name);
  }

}
