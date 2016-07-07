import { NgForm, FormBuilder, FormControl, Validators, FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

export class FormControls {
 name: FormControl;
 age: FormControl;
 email: FormControl;
 password: FormControl;
 confirm_password: FormControl;
 terms: FormControl;
 
 form: FormGroup;
 
 constructor(private builder: FormBuilder) {}

   ngOnInit() {
   		this.form = this.builder.group({
    		name: ['', Validators.minLength(6)],
    		email: ['', Validators.required],
    		age: ['', Validators.required],
    		password: ['', Validators.required],
    		confirm_password: ['', Validators.required],
    		terms: ['', Validators.required]
   		});
    }
   
};