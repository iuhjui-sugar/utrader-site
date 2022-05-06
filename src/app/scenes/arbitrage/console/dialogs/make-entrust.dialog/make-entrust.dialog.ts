import { Component } from "@angular/core";
import { MakeEntrustService } from "../../services/make-entrust.service";
import { PositionsService } from "../../services/positions.service";
import { RecorderService } from "../../services/recorder.service";

@Component({
    selector    : "make-entrust-dialog",
    templateUrl : "make-entrust.dialog.html"
})
export class MakeEntrustDialog {
    constructor(
        public basicService:MakeEntrustService,

        private positionsService:PositionsService,

        private recorderService:RecorderService,
    ){}

    public handleCancel(){
        this.basicService.visable = false;    
    }

    public handleOk(){
        this.basicService.visable = false;
        this.recorderService.items = this.recorderService.items.concat([
            {created:"2020-2-31 08:00:99",content:"买入现货BTC * +0.1"},
            {created:"2020-2-31 08:00:99",content:"做空永续合约BTC * -0.1"},
        ]);
        this.basicService.commitDatas();
        this.positionsService.syncing();
    }

}