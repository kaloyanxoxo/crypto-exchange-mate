export enum RequestTypes {
    GET_PAIR_PRICE_KRAKEN = "GET_PAIR_PRICE_KRAKEN",
    GET_PAIR_PRICE_BITFINEX = "GET_PAIR_PRICE_BITFINEX",
    GET_PAIR_PRICE_HUOBI = "GET_PAIR_PRICE_HUOBI",
    GET_PAIR_PRICE_BINANCE = "GET_PAIR_PRICE_BINANCE",
    GET_HISTORY_KRAKEN = "GET_HISTORY_KRAKEN",
    GET_HISTORY_BITFINEX = "GET_HISTORY_BITFINEX",
    GET_HISTORY_HUOBI = "GET_HISTORY_HUOBI",
    GET_HISTORY_BINANCE = "GET_HISTORY_BINANCE"
}

export interface ResponseType {
    isLoading: boolean,
    isError: boolean,
    pairPrice: number | undefined,
}

export type HistoryData = {
    [key: string]: number[]
}

export interface HistoryResponseType {
    isLoading: boolean,
    isError: boolean,
    history: HistoryData
}