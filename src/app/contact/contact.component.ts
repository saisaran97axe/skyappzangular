import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  form = new FormGroup({
  email : new FormControl('', [
    Validators.required,
    Validators.email,]),
  username : new FormControl('', [
    Validators.required,]),
  phonenumber : new FormControl('', [
    Validators.required,]),
  });
  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form);
}
}
