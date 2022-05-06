

// 套利仓位
export type Position = {
    // 用户编号
    userid:string,
    // 合约标识
    contract:string,
    // 头寸大小
    size:number,
    // 杠杆倍数
    leverage:number,
    // 仓位更新时间
    modified:number,
    // 仓位创建时间
    created:number,
}

export type Balances = {
    // 现货余额信息
    spotBalance : number,
    // 合约余额信息
    futuresBalance : number,
};

export type Endpoint = {
    // 用户编号
    userid:string,
    // API Key
    apikey:string,
    // API SECRET
    apisecret:string,
    // 关联时间
    linktime:number,
};

export type Ticker = {
    // 交易对名称
    name:string,
    // 当前资金费率
    funding_rate : number,
    // 合约持仓量
    position_size : number,
    // 合约价格(美元)(字符串型数字)
    futures_price : string,
    // 现货价格(美元)(字符串型数字)
    spot_price : string,
    // 一张合约对应的币数
    quanto_multiplier : number,
    // 行情更新时间
    modified: number,
}