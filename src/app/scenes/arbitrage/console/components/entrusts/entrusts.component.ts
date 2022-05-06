import { Component } from "@angular/core";
import { EntrustsService } from "../../services/entrusts.service";

@Component({
    selector    : "console-entrusts",
    templateUrl : "entrusts.component.html",
})
export class EntrustsComponent {
    constructor(
        private basicService:EntrustsService,
    ){}

    public get items(){
        return this.basicService.items;
    }

    public handleCancel(){
        this.basicService.items.pop();
        this.basicService.items = this.basicService.items.concat([]);
    }
}

