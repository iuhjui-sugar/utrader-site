import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigureService } from "../../../configure/configure.service";
import { LinkIoEndpointDTO } from "./GATEIO.dtos";
import { UnlinkIoEndpointDTO } from "./GATEIO.dtos";
import { ResolveBalancesDTO } from "./GATEIO.dtos";
import { Ticker } from "./GATEIO.values";
import { Balances } from "./GATEIO.values";
import { MakePositiveEntrustOrderDTO } from "./GATEIO.dtos";
import { CreatePositionDTO } from "./GATEIO.dtos";
import { Position } from  "./GATEIO.values";
import { ResolvePositionsDTO } from "./GATEIO.dtos";

@Injectable({providedIn:"root"})
export class GATEIO_Service {

    constructor(
        private http:HttpClient,

        private configure:ConfigureService,
    ){}

    // 列出所有仓位
    public resolvePositions(options:ResolvePositionsDTO){
        return this.http.post<Position[]>(this.configure.API_BASEURL()+"/arbitrage.module/GATEIO.module/resolve_positions",options);    
    }

    // 创建仓位
    public createPosition(options:CreatePositionDTO){
        return this.http.post<Position>(this.configure.API_BASEURL()+"/arbitrage.module/GATEIO.module/create_position",options);    
    }

    // 创建委托订单(正向)
    public makePositiveEntrustOrder(options:MakePositiveEntrustOrderDTO){
        return this.http.post<string>(this.configure.API_BASEURL()+"/arbitrage.module/GATEIO.module/make_positive_entrust_order",options);
    }

    // 获取账户余额列表
    public resolveBalances(options:ResolveBalancesDTO){
        return this.http.post<Balances>(this.configure.API_BASEURL()+"/arbitrage.module/GATEIO.module/resolve_balances",options);     
    }

    // 建立GATEIO 端点关联
    public linkIoEndpoint(options:LinkIoEndpointDTO){
        return this.http.post<void>(this.configure.API_BASEURL()+"/arbitrage.module/GATEIO.module/link_io_endpoint",options); 
    }

    // 释放GATEIO 端点关联
    public unlinkIoEndpoint(options:UnlinkIoEndpointDTO){
        return this.http.post<void>(this.configure.API_BASEURL()+"/arbitrage.module/GATEIO.module/unlink_io_endpoint",options);
    }

    // 获取GATEIO 交易行情
    public resolveTickers(){
        return this.http.get<Ticker[]>(this.configure.API_BASEURL()+"/arbitrage.module/GATEIO.module/resolve_tickers");
    }
}