import { icons } from "./register.icons";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
// Import backend module
import { BackendModule } from "../../../backend/backend.module";
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
// Import Pages
import { RegisterPage } from "./register.page";
import { FormboxComponent } from "./formbox";
// Import Service
import { RegisterService } from "./common/register.service";


@NgModule({
    imports : [
        // Basic module
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        // Backend module
        BackendModule,
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
        RegisterService,
    ],
    declarations : [
        RegisterPage,
        FormboxComponent,
    ],
})
export class RegisterModule {}

