import { Component } from "@angular/core";
import { EntrustsService } from "../../services/entrusts.service";
import { ReduceDialogService } from "../../services/reduce-dialog.service";

@Component({
    selector    : "console-reduce-dialog",
    templateUrl : "reduce.dialog.html"
})
export class ReduceDialog {
    constructor(
        private basicService:ReduceDialogService,

        private entrustsService:EntrustsService,
    ){}

    public get visable(){
        return this.basicService.visable;
    }

    public handleCancel(){
        this.basicService.visable = false;
    }

    public handleOk(){
        this.basicService.visable = false;
        this.entrustsService.items = this.entrustsService.items.concat([{},]);
    }
    
}