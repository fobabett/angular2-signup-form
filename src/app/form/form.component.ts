import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'signup-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  signup() {
  	console.log('valid! Signed Up');
  }

}
