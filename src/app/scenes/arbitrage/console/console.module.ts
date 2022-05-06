import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
// Import Ant Design UI 
import { NzCardModule } from "ng-zorro-antd/card";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzRadioModule }  from "ng-zorro-antd/radio";
import { NzSelectModule } from "ng-zorro-antd/select";
// Import Components
import { ConsolePage } from "./console.page";
import { TickersComponent } from "./components/tickers/tickers.component";
import { CreateorComponent } from "./components/createor/createor.component";
import { RecorderComponent } from "./components/recorder/recorder.component";
import { EntrustsComponent } from "./components/entrusts/entrusts.component";
import { PositionsComponent } from "./components/positions/positions.component";
// Import Dialog
import { MakeEntrustDialog } from "./dialogs/make-entrust.dialog/make-entrust.dialog";
import { ClearDialog } from "./dialogs/clear/clear.dialog";
import { ReduceDialog } from "./dialogs/reduce/reduce.dialog";
// Import Service 
import { MakeEntrustService } from "./services/make-entrust.service";
import { ClearDialogService } from "./services/clear-dialog.service";
import { ReduceDialogService } from "./services/reduce-dialog.service";
import { PositionsService } from "./services/positions.service";
import { RecorderService } from "./services/recorder.service";
import { EntrustsService } from "./services/entrusts.service";
import { DraftService } from "./services/draft.service";
import { TickersService } from "./services/tickers.service";
import { ConsoleService } from "./service/console.service";
import { RemoteService } from "./services/remote.service";

@NgModule({
    imports : [
        // Import Basic module
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // Import Ant Design UI
        NzCardModule,
        NzGridModule,
        NzSpaceModule,
        NzTableModule,
        NzButtonModule,
        NzCollapseModule,
        NzFormModule,
        NzInputModule,
        NzInputNumberModule,
        NzModalModule,
        NzRadioModule,
        NzSelectModule,
    ],
    providers : [
        RemoteService,
        MakeEntrustService,
        ClearDialogService,
        ReduceDialogService,
        RecorderService,
        PositionsService,
        EntrustsService,
        DraftService,
        TickersService,
        ConsoleService,
    ],
    declarations : [
        ConsolePage,
        // Register Comonent
        TickersComponent,
        CreateorComponent,
        RecorderComponent,
        EntrustsComponent,
        PositionsComponent,
        // Register Dialog
        MakeEntrustDialog,
        ClearDialog,
        ReduceDialog,
    ],
})
export class ConsoleModule {}