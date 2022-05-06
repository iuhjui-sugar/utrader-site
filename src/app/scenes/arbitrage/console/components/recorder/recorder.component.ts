import { Component } from "@angular/core";
import { RecorderService } from "../../services/recorder.service";

@Component({
    selector    : "console-recorder",
    templateUrl : "recorder.component.html"
})
export class RecorderComponent {
    constructor(
        private basicService:RecorderService,
    ){}

    public get items(){
        return this.basicService.items;
    }
    
}


