import { routes } from "./authorize.routes";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ConfigureModule } from "../../configure/configure.module";
import { LoginModule } from "./login";
import { RegisterModule } from "./register";

@NgModule({
    imports   : [
        CommonModule,
        ConfigureModule,
        // import routes module
        RouterModule.forChild(routes),
        // import pages module
        LoginModule,
        RegisterModule,
    ],
    exports : [
        RouterModule,
    ],
})
export class AuthorizeModule {}