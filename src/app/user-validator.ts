import { Control, ControlGroup } from "@angular/common";

interface ValidationResult{
   [key:string]:boolean;
}

export class UserValidator {

    static age(control: Control): ValidationResult { 
    
      if ( control.value <18 || control.value > 40 ){
        return {"age": true};
      }
    
      return null;
    }

    static password(control: Control): ValidationResult {
		let passwordCheck = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])");
    	if(!passwordCheck.test(control.value)) {
    		return {"password": true};
    	}

    	return null;
    }

    static confirm_password(control: Control): ValidationResult {

    	return null;
    }

    static terms(control: Control): ValidationResult {
    	if(control.value !== true) {
    		return {"terms": true};
    	}

    	return null;
    }
}