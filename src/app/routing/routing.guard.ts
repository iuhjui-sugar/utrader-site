import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { AuthenticationService  } from "../authentication/authentication.service";

@Injectable({
    providedIn : "root"
})
export class RoutingGuard implements CanActivate {

    constructor(
        private authentication:AuthenticationService,
        
        private router:Router
    ){}

    public canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
        if (this.authentication.verifyToken() === true) {
            if (this.authentication.session === null){
                let observable = this.authentication.useTokenAuthenticate({
                    token : this.authentication.resolveToken(),
                });
                return observable.pipe(map(()=>true));
            }
            else {
                return true;
            }
        }
        else {
            this.authentication.forwardURL = state.url;
            return this.router.parseUrl("/authorize/login"); 
        }
    }
    
};

