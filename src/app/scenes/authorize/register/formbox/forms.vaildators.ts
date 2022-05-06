import { FormControl } from "@angular/forms";
import { ValidatorFn } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

export class FormVaildators {

    public static confirmation(password:FormControl):ValidatorFn{
        return function(checkword):ValidationErrors|null{
            if (!!checkword.value === false){
                // abort checking
                return null;
            }
            if (checkword.value === password.value){
                return null;
            }
            return {confirmation:true};
        }
    }
}

