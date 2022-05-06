import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { TickersService } from "./services/tickers.service";
import { DraftService } from "./services/draft.service";
import { PositionsService } from "./services/positions.service";

@Component({
    selector    : "console-page",
    templateUrl : "console.page.html"
})
export class ConsolePage implements OnInit {
    constructor(
        private tickersService:TickersService,

        private draftService:DraftService,

        private positionService:PositionsService,
    ){}
    
    public ngOnInit(): void {
        this.tickersService.syncing();
        this.positionService.syncing();
        this.draftService.syncingBalances();
    }
}

