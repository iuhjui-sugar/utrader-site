import { Injectable } from "@angular/core";
import { GATEIO_Service as BackendService } from "../../../../backend/arbitrage/GATEIO";
import { AuthenticationService } from "../../../../authentication";
import { HttpErrorResponse } from "@angular/common/http";
import { PositionsService } from "./positions.service";

@Injectable()
export class MakeEntrustService {

    // 委托所属合约
    public contract:string = "";
    // 委托交易货币
    public currency:string = "";
    // 合约杠杆倍数
    public leverage:number = 2;
    // 现货价格(字符串型数字)
    public spot_price:string = "0";
    // 合约价格
    public futures_price:number = 0;
    // 一张合约对应着的币数
    public quanto_multiplier:number = 1;

    // 单位精度
    public quanto_precision:number = 0;

    // 仓位大小(单位是张数)
    public position_size:string = "";

    // 仓位价值(单位是币数)
    public get position_value(){
        if (this.position_size !== ""){
            return (parseFloat(this.position_size)*this.quanto_multiplier).toString();
        }
        return "";
    }
    
    // 仓位押金额度(单位是美元)
    public position_deposit:string = "0.00";

    // 弹窗显示状态
    public visable = false;

    constructor(
        private positionsService:PositionsService,

        private backendService:BackendService,

        private authenticationService:AuthenticationService,
    ){}

    public updateSpotPrice(spot_price:string){
        this.spot_price = spot_price;
    }

    public updatePositionSize(position_size:number){
        this.position_size = position_size.toString();
    }

    public updateQuantoMultiplier(quanto_multiplier:number){
        this.quanto_multiplier = quanto_multiplier;
        const exponential = parseInt(quanto_multiplier.toExponential().split("e")[1]);
        if (exponential < 0){
            this.quanto_precision = Math.abs(exponential);
        }
        else {
            this.quanto_precision = 0;
        }
    }

    public updateContract(contract:string){
        this.contract = contract;
        this.currency = contract.split("_")[0];
        console.log("currency:",this.currency);
    }

    public openDialog(){
        this.visable = true;
    }

    public commitDatas(){
        const session = this.authenticationService.session;
        if (session === null){
            return;
        }
        /*
        if (this.deposit === ""){
            alert("押金格式错误");
            return;
        }
        */
        const O1 = this.backendService.createPosition({
            userid : session.userid,
            contract : this.contract,
            leverage : this.leverage,
            position_size : parseFloat(this.position_size),
        })
        O1.subscribe({
            next : (values)=>{
                console.log("创建委托订单的结果:",values);
                this.positionsService.syncing();
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

