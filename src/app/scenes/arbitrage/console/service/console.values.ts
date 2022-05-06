
export type Ticker = {
    // 交易对名称
    trade_pair_name : string,
    // 当前资金费率
    funding_rate : string,
    // 期货市场价
    futures_market_price : string,
    // 现货市场价
    spot_market_price : string,
    // 持仓量
    position_size : string,
}

export type Draft = {
    // 交易对名称
    trade_pair_name : string,
    // 期货账户余额
    futures_balance : string,
    // 现货账户余额
    spot_balance : string,
    // 期货杠杆
    leverage : string,
    // 交易数量
    trade_size : string,
    // 交易价值
    trade_value : string,
}





