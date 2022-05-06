import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { CanActivate } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../../authentication";
import { Router } from "@angular/router";

@Injectable()
export class ArbitrageChecker implements CanActivate{

    constructor(
        private router:Router,

        private authentication:AuthenticationService,
    ){}
    
    public canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authentication.session !== null){
            if (this.authentication.session.links.includes("GATEIO.endpoint") === true){
                return true;
            }
            else{
                return this.router.parseUrl("/arbitrage/endpoint");
            }
        } 
        else{
            return this.router.parseUrl("");
        }
    }
    
}

