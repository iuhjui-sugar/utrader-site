import { routes } from "./arbitrage.routes";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ConsoleModule } from "./console";
import { EndpointModule } from "./endpoint";
import { ArbitrageChecker } from "./arbitrage.checker";


@NgModule({
    imports : [
        // Import Pages
        ConsoleModule,
        EndpointModule,
        // Import Routes
        RouterModule.forChild(routes),
    ],
    providers : [
        ArbitrageChecker,
    ],
    exports : [
        RouterModule,
    ],
})
export class ArbitrageModule {};