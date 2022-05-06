import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Ticker } from "../../../../backend/arbitrage/GATEIO/GATEIO.values";
import { GATEIO_Service as BackendService } from "../../../../backend/arbitrage/GATEIO";

@Injectable()
export class TickersService {

    constructor(
        private backendService:BackendService,
    ){}

    public condition:string|null = null;

    public datas:Ticker[] = [];    

    public items:Ticker[] = [];

    public syncing(){
        const O1 = this.backendService.resolveTickers();
        O1.subscribe({
            next  : (values)=>{
                this.datas = values;
                this.items = this.datas.concat([]);
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

    public updateCondition(condition:string){
        if (condition !== ""){
            this.items = this.datas.filter((item)=>{
                console.log("名字:",condition.toUpperCase());
                return item.name.indexOf(condition.toUpperCase()) === 0;
            });
        }
        else{
            this.items = this.datas.concat([]);
        }
    }
    
}

