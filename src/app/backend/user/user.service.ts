import { Injectable } from "@angular/core";
import { ConfigureService } from "../../configure/configure.service";
import { HttpClient } from "@angular/common/http";
import { RegisterDTO } from "./user.dtos";
import { LoginDTO } from "./user.dtos";
import { LoginByTokenDTO } from "./user.dtos";
import { Session } from "./user.values";

@Injectable({
    providedIn : "root",
})
export class UserService {
    constructor(
        private http:HttpClient,

        private configure:ConfigureService,
    ){}

    // 注册账户
    public register(options:RegisterDTO){
        return this.http.post<Session>(this.configure.API_BASEURL()+"/user.module/register",options);
    }

    // 使用账户登录
    public login(options:LoginDTO){
        return this.http.post<Session>(this.configure.API_BASEURL()+"/user.module/login",options);
    }

    // 使用令牌登录
    public loginByToken(options:LoginByTokenDTO){
        return this.http.post<Session>(this.configure.API_BASEURL()+"/user.module/login_by_token",options);
    }
}