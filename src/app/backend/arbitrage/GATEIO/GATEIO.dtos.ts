
export type ResolvePositionsDTO = {
    userid:string,
}


export type CreatePositionDTO = {
    // 用户编号
    userid:string,
    // 合约标识
    contract:string,
    // 仓位大小(币本位)
    position_size:number,
    // 杠杆倍数
    leverage:number,
}

export type MakePositiveEntrustOrderDTO = {
    userid : string,
    contract : string,
    leverage : number,
    position_size : number,
};

export type ResolveBalancesDTO = {
    userid : string,
};

export type LinkIoEndpointDTO = {
    userid    : string,
    apikey    : string,
    apisecret : string,
};

export type UnlinkIoEndpointDTO = {
    userid : string,
}
