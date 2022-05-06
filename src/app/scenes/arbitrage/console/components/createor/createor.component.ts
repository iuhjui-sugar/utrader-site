import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { DraftService } from "../../services/draft.service";

@Component({
    selector    : "console-createor",
    templateUrl : "createor.component.html",
})
export class CreateorComponent {

    public leverage:FormControl;

    public trade_size:FormControl;

    public trade_value:FormControl;
    
    constructor(
        private basicService:DraftService,
    ){
        this.leverage = new FormControl(this.basicService.leverage,[
            Validators.required,
            Validators.min(1),
            Validators.max(20),
        ]);
        this.trade_size = new FormControl(this.basicService.trade_size,[
            Validators.required,
        ]);
        this.trade_value = new FormControl(this.basicService.trade_value,[
            Validators.required,
        ]);
    }

    public get title(){
        return this.basicService.trade_pair_name;
    }

    public get futures_balance(){
        return this.basicService.futures_balance;
    }

    public get spot_balance(){
        return this.basicService.spot_balance;
    }

    public doReset(){
        this.basicService.leverage = "2";
        this.basicService.trade_size = "";
        this.basicService.trade_value = "";
        this.leverage.patchValue(this.basicService.leverage);
        this.trade_size.patchValue(this.basicService.trade_size);
        this.trade_value.patchValue(this.basicService.trade_value);
    }
}

