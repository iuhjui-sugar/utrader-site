import { routes } from "./routing.routes";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RoutingGuard } from "./routing.guard";

@NgModule({
    imports : [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: "top",
            anchorScrolling: "enabled",
            initialNavigation: "enabledBlocking"
            // relativeLinkResolution: "legacy"
      })
    ],
    providers : [
        RoutingGuard,
    ],
    exports : [
        RouterModule,
    ],
})
export class RoutingModule {};