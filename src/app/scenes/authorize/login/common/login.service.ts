import { tap } from "rxjs/operators";
import { delay } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../../authentication";
import { NzMessageService } from "ng-zorro-antd/message";
import { LoginDTO } from "../../../../backend/user";

@Injectable({providedIn:"root"})
export class LoginService {

    constructor(
        private router:Router,

        private message:NzMessageService,

        private authentication:AuthenticationService,
    ){}

    public submit(options:LoginDTO){
        let observable = this.authentication.useAccountAuthenticate(options);
        observable = observable.pipe(tap(()=>{
            this.message.success("恭喜你登录成功,请稍等马上为您跳转!")
        }));
        observable = observable.pipe(delay(2000));
        observable = observable.pipe(tap(()=>{
            let forwardURL = this.authentication.forwardURL;
            if (forwardURL !== null){
                this.router.navigateByUrl(forwardURL);
            }
            else {
                this.router.navigateByUrl("");
            }
        }));
        observable = observable.pipe(catchError((error)=>{
            if (error instanceof HttpErrorResponse){
                this.message.error(error.error.message);
                return throwError(()=>{return error}); 
            }
            if (error instanceof Error){
                this.message.error(error.message);    
                return throwError(()=>{return error});
            }
            return throwError(()=>{return error});
        }));
        return observable;
    }
}
