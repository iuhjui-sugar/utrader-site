import { tap } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { RegisterDTO } from "../backend/user/user.dtos";
import { LoginDTO } from "../backend/user/user.dtos";
import { LoginByTokenDTO } from "../backend/user/user.dtos";
import { Session } from "../backend/user/user.values";
import { UserService } from "../backend/user/user.service";


@Injectable({providedIn:"root"})
export class AuthenticationService {
    public forwardURL:string|null = null;

    public session:Session|null = null;

    constructor(
        private userService:UserService,
    ){}

    public verifyToken(){
        let token   = localStorage.getItem("session-token");
        let expire  = localStorage.getItem("session-expire");
        let nowtime = Math.floor(new Date().getTime()/1000);
        if (token === null || expire === null){
            return false;
        }
        if (parseInt(expire) < nowtime){
            return false;
        }
        return true;
    }

    public resolveToken(){
        if (this.session === null){
            if (this.verifyToken() === false){
                throw new Error("会话令牌获取失败,请验证后再调用");
            }
            return localStorage.getItem("session-token") as string;
        } 
        else {
            return this.session.token;
        }
    }

    public refreshSession(observable:Observable<Session>){
        observable = observable.pipe(tap((session)=>{
            this.session = session;
            localStorage.setItem("session-token",session.token);
            localStorage.setItem("session-expire",session.expired.toString());
        }));
        observable = observable.pipe(catchError((error)=>{
            this.session = null;
            localStorage.removeItem("session-token");
            localStorage.removeItem("session-expire");
            return throwError(()=>{return error});
        }));
        return observable;
    }

    public useTokenAuthenticate(options:LoginByTokenDTO){
        let observable = this.userService.loginByToken(options);
        observable = this.refreshSession(observable);
        return observable;
    }

    public useAccountRegister(options:RegisterDTO){
        let observable =  this.userService.register(options);
        observable = this.refreshSession(observable);
        return observable;
    }

    public useAccountAuthenticate(options:LoginDTO){
        let observable = this.userService.login(options);
        observable = this.refreshSession(observable);
        return observable;
    }
}
