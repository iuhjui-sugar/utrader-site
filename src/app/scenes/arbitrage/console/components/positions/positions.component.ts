import { Component } from "@angular/core";
import { PositionsService } from "../../services/positions.service";
import { ClearDialogService } from "../../services/clear-dialog.service";
import { ReduceDialogService } from "../../services/reduce-dialog.service";

@Component({
    selector    : "console-positions",
    templateUrl : "positions.component.html"
})
export class PositionsComponent {
    constructor(
        private basicService:PositionsService,

        private clearDialogService:ClearDialogService,

        private reduceDialogService:ReduceDialogService,
    ){}

    public get items(){
        return this.basicService.items;
    }

    public doReduce(){
        this.reduceDialogService.visable = true;
    }

    public doClear(){
        this.clearDialogService.visable = true;
    }
}