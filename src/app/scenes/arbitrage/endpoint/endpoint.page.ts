import { Component } from "@angular/core";
import { EndpointService } from "./common/endpoint.service";

@Component({
    selector    : "endpoint-page",
    templateUrl : "endpoint.page.html",
})
export class EndpointPage {
    constructor(private service:EndpointService){}

    public get isLinkSuccess(){
        return this.service.isLinkSuccess;
    }
}
