import { Injectable } from "@angular/core";
import { Position } from "../../../../backend/arbitrage/GATEIO/GATEIO.values";
import { GATEIO_Service as BackendService } from "../../../../backend/arbitrage/GATEIO";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthenticationService } from "../../../../authentication";

@Injectable()
export class PositionsService {
    public items:Position[] = [];

    constructor(
        private backendService:BackendService,

        private authenticationService:AuthenticationService,
    ){}

    public syncing(){
        const session = this.authenticationService.session;
        if (session === null){
            return;
        }
        const O1 = this.backendService.resolvePositions({userid:session.userid});
        O1.subscribe({
            next  : (values)=>{
                console.log("数据更新了:",values);
                this.items = values;
            },
            error : (error:unknown)=>{
                if (error instanceof HttpErrorResponse){
                    alert(error.error.message);
                }
                else{
                    throw error;
                }
            },
            
        });
    }
}

