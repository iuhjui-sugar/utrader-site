import { Injectable } from "@angular/core";

@Injectable({
    providedIn : "root",
})
export class ConfigureService {
    // 基础API路径
    public API_BASEURL(){
        return "http://74.120.173.228:3001/api/v1"
        //return "http://127.0.0.1:3001/api/v1";
    }
}