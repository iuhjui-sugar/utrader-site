import { Routes } from "@angular/router";
import { ConsolePage } from "./console";
import { EndpointPage } from "./endpoint";
import { ArbitrageChecker } from "./arbitrage.checker";

export const routes:Routes = [
    {
        path : "",
        redirectTo : "console",
    },
    {
        path : "console",
        canActivate : [
            ArbitrageChecker,
        ],
        component : ConsolePage,
    },
    {
        path : "endpoint",
        component : EndpointPage,
    }
];