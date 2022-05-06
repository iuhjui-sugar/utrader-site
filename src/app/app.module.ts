import { NgModule } from "@angular/core";
import { HashLocationStrategy} from "@angular/common";
import { LocationStrategy } from "@angular/common";
import { PathLocationStrategy } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";

import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
// Import backend module
import { BackendModule } from "./backend/backend.module";

// Import authentication module
import { AuthenticationModule } from "./authentication/authentication.module";

// Import routing module
import { RoutingModule } from "./routing/routing.module";

// Import app component
import { AppComponent } from "./app.component";

// Import containers
import { DefaultFooterComponent } from "./containers";
import { DefaultHeaderComponent } from "./containers";
import { DefaultLayoutComponent } from "./containers";

// Import coreui 
import { AvatarModule } from "@coreui/angular";
import { BadgeModule } from "@coreui/angular";
import { BreadcrumbModule } from "@coreui/angular";
import { ButtonGroupModule } from "@coreui/angular";
import { ButtonModule } from "@coreui/angular";
import { CardModule } from "@coreui/angular";
import { DropdownModule } from "@coreui/angular";
import { FooterModule } from "@coreui/angular";
import { FormModule } from "@coreui/angular";
import { GridModule } from "@coreui/angular";
import { HeaderModule } from "@coreui/angular";
import { ListGroupModule } from "@coreui/angular";
import { NavModule } from "@coreui/angular";
import { ProgressModule } from "@coreui/angular";
import { SharedModule } from "@coreui/angular";
import { SidebarModule } from "@coreui/angular";
import { TabsModule } from "@coreui/angular";
import { UtilitiesModule } from "@coreui/angular";
import { IconModule } from "@coreui/icons-angular";
import { IconSetService } from "@coreui/icons-angular";

// Import Ant Design UI
import { NzModalModule } from "ng-zorro-antd/modal";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true,
};

const APP_CONTAINERS = [
	DefaultFooterComponent,
	DefaultHeaderComponent,
	DefaultLayoutComponent,
];

@NgModule({
	declarations: [
		AppComponent,
		...APP_CONTAINERS
	],
  	imports: [
		BrowserModule,
    	BrowserAnimationsModule,
    	BackendModule,
		AuthenticationModule,
		RoutingModule,
    	AvatarModule,
    	BreadcrumbModule,
    	FooterModule,
    	DropdownModule,
    	GridModule,
    	HeaderModule,
    	SidebarModule,
    	IconModule,
    	PerfectScrollbarModule,
    	NavModule,
    	ButtonModule,
    	FormModule,
    	UtilitiesModule,
    	ButtonGroupModule,
    	ReactiveFormsModule,
    	SidebarModule,
    	SharedModule,
    	TabsModule,
    	ListGroupModule,
    	ProgressModule,
    	BadgeModule,
    	ListGroupModule,
    	CardModule,
		// Ant Design UI
		NzModalModule,
  	],
	providers: [
		{
			provide  : LocationStrategy,
			useClass : HashLocationStrategy,
		},
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
      		useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
		},
    	IconSetService,
    	Title
	],
	bootstrap : [
		AppComponent
	],
})
export class AppModule {
}
