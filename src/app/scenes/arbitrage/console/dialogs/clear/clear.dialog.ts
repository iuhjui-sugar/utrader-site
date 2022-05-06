import { Component } from "@angular/core";
import { ClearDialogService } from "../../services/clear-dialog.service";
import { PositionsService } from "../../services/positions.service";

@Component({
    selector    : "console-clear-dialog",
    templateUrl : "clear.dialog.html"
})
export class ClearDialog {
    constructor(
        private basicService:ClearDialogService,

        private positionsService:PositionsService,

    ){}

    public get visable(){
        return this.basicService.visable;
    }

    public handleCancel(){
        this.basicService.visable = false;
    }

    public handleOk(){
        this.basicService.visable = false;
        this.positionsService.items = [];
    }

}