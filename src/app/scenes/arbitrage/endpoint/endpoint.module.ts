import { NgModule } from "@angular/core";
// Basic Module
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
// Ant Design UI
import { NzCardModule } from "ng-zorro-antd/card";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzMessageModule } from "ng-zorro-antd/message";
import { NzAlertModule } from "ng-zorro-antd/alert";

// Components
import { EndpointPage } from "./endpoint.page";
import { FormboxComponent } from "./formbox";
import { SuccessboxComponent } from "./successbox";
// Service
import { EndpointService } from "./common/endpoint.service";

@NgModule({
    imports : [
        // import basic module 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // import ant design ui
        NzCardModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzMessageModule,
        NzAlertModule,
    ],
    providers : [
        EndpointService, 
    ],
    declarations : [
        EndpointPage,
        FormboxComponent,
        SuccessboxComponent,
    ],
})
export class EndpointModule {}