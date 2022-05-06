import { tap } from "rxjs/operators";
import { delay } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthenticationService } from "../../../../authentication";
import { NzMessageService } from "ng-zorro-antd/message";
import { GATEIO_Service as BackendService } from "../../../../backend/arbitrage/GATEIO";

@Injectable()
export class EndpointService {

    constructor(
        private backend:BackendService,

        private message:NzMessageService,

        private authentication:AuthenticationService,
    ){}

    public get isLinkSuccess(){
        if (this.authentication.session === null){
            return false;
        }
        else {
            return this.authentication.session.links.includes("GATEIO.endpoint");
        }    
    }

    public linkIoEndpoint(apikey:string,secret:string){
        let observable = this.backend.linkIoEndpoint({
            userid : this.authentication.session?.userid as string,
            apikey : apikey,
            apisecret : secret,
        });
        observable = observable.pipe(delay(2000));
        observable = observable.pipe(tap(()=>{
            alert("GATEIO交易所访问端点绑定成功!");
            this.authentication.session?.links.push("GATEIO.endpoint");
        }));
        observable = observable.pipe(catchError((error)=>{
            if (error instanceof HttpErrorResponse){
                alert(JSON.stringify(error.error.message));
                return throwError(()=>{return error}); 
            }
            if (error instanceof Error){
                alert(JSON.stringify(error.message));
                return throwError(()=>{return error});
            }
            return throwError(()=>{return error});
        }));
        return observable;
    }

    public unlinkIoEndpoint(){
        let observable = this.backend.unlinkIoEndpoint({
            userid : this.authentication.session?.userid as string,
        });
        observable = observable.pipe(tap(()=>{
            alert("GATEIO交易所访问端点解关联成功!");
            if (this.authentication.session !== null){
                this.authentication.session.links = this.authentication.session.links.filter((name)=>{
                    return name !== "GATEIO.endpoint"
                });
            }
        }));
        observable = observable.pipe(catchError((error)=>{
            if (error instanceof HttpErrorResponse){
                alert(JSON.stringify(error.error.message));
                return throwError(()=>{return error}); 
            }
            if (error instanceof Error){
                alert(JSON.stringify(error.message));
                return throwError(()=>{return error});
            }
            return throwError(()=>{return error});
        }));
        return observable;
    }
    
}