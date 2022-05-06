import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { LoginService } from "../common/login.service";


@Component({
    selector    : "login-formbox",
    templateUrl : "formbox.component.html",
})
export class FormboxComponent {
    public username = new FormControl("",[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
    ]);

    public password = new FormControl("",[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
    ]);

    public formGroup:FormGroup;

    public isLoading:boolean = false;

    constructor(private service:LoginService){
        this.formGroup = new FormGroup({});
        this.formGroup.addControl("username",this.username);
        this.formGroup.addControl("password",this.password);
    }

    public lockon(){
        this.isLoading = true;
        this.formGroup.disable();
    }

    public unlock(){
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

