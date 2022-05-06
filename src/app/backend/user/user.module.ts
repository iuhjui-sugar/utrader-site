import { NgModule } from "@angular/core";
import { HttpClientModule  } from "@angular/common/http";
import { ConfigureModule } from "../../configure/configure.module";
import { UserService } from "./user.service";

@NgModule({
    imports : [
        ConfigureModule,
        HttpClientModule,
    ],
    providers : [
        UserService,
    ],
})
export class UserModule {}