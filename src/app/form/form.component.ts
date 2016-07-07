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

 	  	this.name = new Control("", Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)]));
 	  	this.age = new Control("", Validators.compose([Validators.required, UserValidator.age]));
 	  	this.email = new Control("", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)]));
 	  	this.password = new Control("", Validators.compose([Validators.required, UserValidator.password, Validators.minLength(6), Validators.maxLength(20)]));
 	  	this.confirm_password = new Control("", Validators.compose([Validators.required, UserValidator.confirm_password]));
 	  	this.terms = new Control("", Validators.compose([Validators.required, UserValidator.terms]));
		
		this.form = this.builder.group({
			name:  this.name,
			age: this.age,
			email: this.email,
			password: this.password,
			confirm_password: this.confirm_password,
			terms: this.terms
		});
 	   }

  	signup() {
  		console.log('valid! Signed Up');
  	}

}
