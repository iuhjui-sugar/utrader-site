import { Routes } from "@angular/router";
import { LoginPage } from "./login";
import { RegisterPage} from "./register";

export const routes:Routes = [
    {
        path : "",
        redirectTo : "login",
    },
    {
        path : "login",
        component : LoginPage,
    },
    {
        path : "register",
        component : RegisterPage,
    },
];
