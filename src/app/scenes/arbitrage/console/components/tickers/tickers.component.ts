import { Component } from "@angular/core";
import { DraftService } from "../../services/draft.service";
import { TickersService } from "../../services/tickers.service";
import { MakeEntrustService } from "../../services/make-entrust.service";
import { Ticker } from "../../../../../backend/arbitrage/GATEIO/GATEIO.values";

@Component({
    selector    : "console-tickers",
    templateUrl : "tickers.component.html"
})
export class TickersComponent {

    constructor(
        private basicService:TickersService,

        private draftService:DraftService,

        private makeEntrustService:MakeEntrustService,
    ){}

    public get items(){
        return this.basicService.items;
    }

    public updateCondition(event:any){
        this.basicService.updateCondition(event.target.value);
    }

    public openMakeEntrustDialog(ticker:Ticker){
        this.makeEntrustService.updateSpotPrice(ticker.spot_price);
        this.makeEntrustService.updatePositionSize(1);
        this.makeEntrustService.updateQuantoMultiplier(ticker.quanto_multiplier);
        this.makeEntrustService.updateContract(ticker.name);
        this.makeEntrustService.openDialog();
    }
}