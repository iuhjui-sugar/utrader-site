import { icons } from "./login.icons";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
// Import Components
import { LoginPage } from "./login.page";
import { FormboxComponent } from "./formbox";
import { SloganboxComponent } from "./sloganbox";
// Import CoreUI
import { ButtonModule } from "@coreui/angular";
import { CardModule } from "@coreui/angular";
import { FormModule } from "@coreui/angular";
import { GridModule } from "@coreui/angular";
import { AlertModule } from "@coreui/angular";
import { IconModule } from "@coreui/icons-angular";
// Import Ant Design UI
import { NzFormModule } from "ng-zorro-antd/form";
import { NzButtonModule  } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { NzMessageModule } from "ng-zorro-antd/message";
// Import Service
import { LoginService } from "./common/login.service";

@NgModule({
    imports : [
        // Basic module
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        // Core UI
        ButtonModule,
        CardModule,
        FormModule,
        GridModule,
        AlertModule,
        IconModule,
        // Ant Design UI
        NzFormModule,
        NzButtonModule,
        NzInputModule,
        NzSpinModule,
        NzMessageModule,
        NzIconModule.forChild(icons),
    ],
    providers : [
        LoginService,
    ],
    declarations : [
        LoginPage,
        FormboxComponent,
        SloganboxComponent,
    ],
})
export class LoginModule {}