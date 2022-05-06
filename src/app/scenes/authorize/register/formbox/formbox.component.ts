import { catchError } from "rxjs/operators";
import { throwError  } from "rxjs";
import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormVaildators } from "./forms.vaildators";
import { RegisterService } from "../common/register.service";

@Component({
    selector    : "register-formbox",
    templateUrl : "./formbox.component.html",
})
export class FormboxComponent {
    public username = new FormControl("",[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
    ]);

    public password = new FormControl("",[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
    ]);

    public checkword = new FormControl("",[
        Validators.required,
    ]);

    public formGroup:FormGroup;

    public isLoading:boolean = false;
    
    constructor(private service:RegisterService){
        this.checkword.addValidators([
            FormVaildators.confirmation(this.password),
        ]);
        this.formGroup = new FormGroup({
            username  : this.username,
            password  : this.password,
            checkword : this.checkword, 
        });
    }

    private lockon(){
        this.isLoading = true;
        this.formGroup.disable();
    }

    private unlock(){
        this.isLoading = false;
        this.formGroup.enable();   
    }

    public submit(){
        this.lockon();
        let observable = this.service.submit({
            username : this.username.value,
            password : this.password.value,
        });
        observable = observable.pipe(catchError((error)=>{
            this.unlock();
            return throwError(()=>{return error});
        }));
        observable.subscribe();
    }
}

