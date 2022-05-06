import { NgModule } from "@angular/core";
import { UserModule } from "./user/user.module";
import { ArbitrageModule } from "./arbitrage/arbitrage.module";

@NgModule({
    imports : [
        UserModule,
        ArbitrageModule,
    ],
})
export class BackendModule {}