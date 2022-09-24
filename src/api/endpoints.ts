export const KrakenEndpoint = (pair: string) => `http://localhost:3001/kraken/Ticker?pair=${pair}`; // capitalize!
export const BinanceEndpoint = (pair: string) => `http://localhost:3001/binance/ticker/price?symbol=${pair}`; // capitalize!
export const HuobiEndpoint = (pair: string) => `http://localhost:3001/huobi/detail?symbol=${pair}`; // capitalize!
export const BitfinexEndpoint = (pair: string) => `http://localhost:3001/bitfinex/ticker/t${pair}`; // capitalize! with lower t infront

export const KrakenHistoryEndpoint = (pair: string) => `http://localhost:3001/kraken/Depth?pair=${pair}`; // capitalize!
export const BinanceHistoryEndpoint = (pair: string) => `http://localhost:3001/binance/trades?symbol=${pair}`; // capitalize!
export const HuobiHistoryEndpoint = (pair: string) => `http://localhost:3001/huobi/history/trade?symbol=${pair}&size=10`; // capitalize!
export const BitfinexHistoryEndpoint = (pair: string) => `http://localhost:3001/bitfinex/trades/t${pair}/hist`; // capitalize! with lower t infront