import { Control } from "@angular/common";

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
   
    // static usernameTaken(control: Control): Promise<ValidationResult> {

    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (control.value === "David") {
    //                 resolve({"usernameTaken": true})
    //             } else {
    //                 resolve(null);
    //             };
                
    //         }, 1000);
    //     });

    // }
}