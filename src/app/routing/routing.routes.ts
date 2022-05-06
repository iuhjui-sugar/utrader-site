import { Routes } from "@angular/router";

import { RoutingGuard } from "./routing.guard";

import { DefaultLayoutComponent } from "../containers";


export const routes:Routes = [
    {
		path : "",
    	redirectTo : "arbitrage",
    	pathMatch  : "full"
	},
	{
		path: "",
    	component: DefaultLayoutComponent,
    	canActivate : [
			RoutingGuard,
		],
		data: { 
			title : "Home"
		},
    	children: [
			{
				path : "arbitrage",
				loadChildren : async ()=>{
					return (await import("../scenes/arbitrage/arbitrage.module")).ArbitrageModule;
				},
			},
			{
        		path: "dashboard",
        		loadChildren: () =>{
					return import("../views/dashboard/dashboard.module").then((m) => m.DashboardModule)
				},
      		},
      		{
        		path: "theme",
        		loadChildren : () => {
					return import("../views/theme/theme.module").then((m) => m.ThemeModule) 
				},		
      		},
      		{
        		path: "base",
        		loadChildren: () =>{
					return import("../views/base/base.module").then((m) => m.BaseModule) 
				},
      		},
			{
        		path: "buttons",
        		loadChildren: () => {
					return import("../views/buttons/buttons.module").then((m) => m.ButtonsModule) 
				},
			},
      		{
				path: "forms",
        		loadChildren: () => {
					return import("../views/forms/forms.module").then((m) => m.CoreUIFormsModule) 
				},		
      		},
      		{
        		path: "charts",
        		loadChildren: () => {
					return import("../views/charts/charts.module").then((m) => m.ChartsModule); 
				},		
      		},
      		{
        		path: "icons",
        		loadChildren: () => {
					return import("../views/icons/icons.module").then((m) => m.IconsModule);
				}
      		},
      		{
        		path: "notifications",
        		loadChildren: () => {
					return import("../views/notifications/notifications.module").then((m) => m.NotificationsModule) 
				}
			},
			{
				path: "widgets",
        		loadChildren : () => {
					return import("../views/widgets/widgets.module").then((m) => m.WidgetsModule);
				},
			},
			{
				path: "pages",
				loadChildren: () => {
					return import("../views/pages/pages.module").then((m) => m.PagesModule); 
				}
			},
		]
	},
	{
		path: "authorize",
		loadChildren : async ()=>{
			return (await import("../scenes/authorize/authorize.module")).AuthorizeModule;
		},
	},
	{
		path : "**", 
		redirectTo : "arbitrage"
	}
];