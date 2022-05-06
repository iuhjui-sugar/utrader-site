import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { GATEIO_Service as BackendService } from "../../../../backend/arbitrage/GATEIO";
import { Ticker } from "./console.values";
import { Draft } from "./console.values";

@Injectable()
export class ConsoleService {
    
    
    constructor(
        private backendService:BackendService,
    ){}



}