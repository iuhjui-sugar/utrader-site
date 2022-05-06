import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ConfigureModule } from "../../../configure/configure.module";
import { GATEIO_Service } from "./GATEIO.service";

@NgModule({
    imports : [
        ConfigureModule,
        HttpClientModule,
    ],
    providers : [
        GATEIO_Service,
    ],
})
export class GATEIO_Module {}

