import { tap } from "rxjs";
import { Component } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal"
import { EndpointService } from "../common/endpoint.service";

@Component({
    selector    : "endpoint-successbox",
    templateUrl : "successbox.component.html",
})
export class SuccessboxComponent {
    
    constructor(
        private modalService:NzModalService,

        private endpointService:EndpointService,
    ){}

    public unlink(){
        this.modalService.confirm({
            nzTitle   : "是否确认解除关联?",
            nzContent : "该操作是危险操作不可撤销!",
            nzOnOk : ()=>{
                this.commit();
            },
        });
    }

    public commit(){
        let observable = this.endpointService.unlinkIoEndpoint();
        observable.subscribe();
    }
}