import { Component, OnInit } from '@angular/core';
// import { NgForm, FormBuilder, FormControl, Validators, FormGroup, FORM_DIRECTIVES } from '@angular/forms';
import { Control, FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES } from '@angular/common';
// import { FormControls } from '../form-control';
import { UserValidator } from '../user-validator';

@Component({
  moduleId: module.id,
  selector: 'signup-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class FormComponent implements OnInit {

  	name: Control;
 	age: Control;
 	email: Control;
 	password: Control;
 	confirm_password: Control;
 	terms: Control;
 	
 	form: ControlGroup;
 
 	constructor(private builder: FormBuilder) {}
	
 	  ngOnInit() {
 	  		// this.form = this.builder.group({
 	   	// 	name: ['', Validators.minLength(6)],
 	   	// 	email: ['', Validators.required],
 	   	// 	age: ['', Validators.required],
 	   	// 	password: ['', Validators.required],
 	   	// 	confirm_password: ['', Validators.required],
 	   	// 	terms: ['', Validators.required]
 	  		// });
 	  	this.name = new Control("", Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)]));
 	  	this.age = new Control("", Validators.compose([Validators.required, UserValidator.age]));
 	  	this.email = new Control("", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)]));
		
		this.form = this.builder.group({
			name:  this.name,
			age: this.age,
			email: this.email
		});
 	   }

  	signup() {
  		console.log('valid! Signed Up');
  	}

}
