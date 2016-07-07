import { NgForm, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

export class FormFormControl {
 name: FormControl;
 age: FormControl;
 email: FormControl;
 password: FormControl;
 confirm_password: FormControl;
 terms: FormControl;
 
 form: FormGroup;
 
 constructor(private builder: FormBuilder) {
 
   this.name = new FormControl('', Validators.required, Validators.minLength(6));
   this.age = new FormControl('', Validators.required);
   this.email = new FormControl('', Validators.required);
   this.password = new FormControl('', Validators.required);
   this.confirm_password = new FormControl('', Validators.required);
   this.terms = new FormControl('', Validators.required);
 
   this.form = builder.group({
     name: this.name,
     email: this.email,
     age: this.age,
     password: this.password,
     confirm_password: this.confirm_password,
     terms: this.terms

   });
 }
};