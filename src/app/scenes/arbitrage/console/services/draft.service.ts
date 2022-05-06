import { Injectable } from "@angular/core";
import { GATEIO_Service as BackendService } from "../../../../backend/arbitrage/GATEIO";
import { AuthenticationService } from "../../../../authentication";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class DraftService {
    // 交易对名称
    public trade_pair_name = "BTC/USDT";
    // 合约账户余额
    public futures_balance = 0;
    // 现货账户余额 
    public spot_balance = 0;
    // 杠杆倍数
    public leverage = "2";
    // 交易数量
    public trade_size =  "";
    // 交易价值
    public trade_value = "";

    constructor(
        private backendService:BackendService,

        private authenticationService:AuthenticationService,
    ){}

    public syncingBalances(){
        const session = this.authenticationService.session;
        if (session === null){
            return;
        }
        const O1 = this.backendService.resolveBalances({
            userid : session.userid,
        });
        O1.subscribe({
            next : (balances)=>{
                this.spot_balance = balances.spotBalance;
                this.futures_balance = balances.futuresBalance;
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


