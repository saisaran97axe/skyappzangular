import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,

  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
  ]);
  amountFormControl = new FormControl('', [
    Validators.required,
  ]);
  locationFormControl = new FormControl('', [
    Validators.required,
  ]);
  referredByFormControl = new FormControl('', [
    Validators.required,

  ]);

}
