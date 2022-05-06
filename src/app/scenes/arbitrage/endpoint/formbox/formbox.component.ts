import { tap } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { EndpointService } from "../common/endpoint.service";

@Component({
    selector    : "endpoint-formbox",
    templateUrl : "formbox.component.html",
})
export class FormboxComponent {
    public apikey = new FormControl("",[
        Validators.required,
    ]);

    public apisecret = new FormControl("",[
        Validators.required,
    ]);

    public formGroup:FormGroup;

    public isLoading = false;

    constructor(private service:EndpointService){
        this.formGroup = new FormGroup({
            apikey : this.apikey,
            apisecret : this.apisecret,
        });
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
        let apikey = this.apikey.value;
        let secret = this.apisecret.value;
        let observable = this.service.linkIoEndpoint(apikey,secret);
        observable = observable.pipe(tap(()=>{
            this.unlock();
        }));
        observable = observable.pipe(catchError((error)=>{
            this.unlock();
            return throwError(()=>{return error});
        }));
        observable.subscribe();
    }
}