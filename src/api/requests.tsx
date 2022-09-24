import { BinanceEndpoint, BinanceHistoryEndpoint, BitfinexEndpoint, BitfinexHistoryEndpoint, HuobiEndpoint, HuobiHistoryEndpoint, KrakenEndpoint, KrakenHistoryEndpoint } from "./endpoints";

export interface KrakenMarketPriceResponse {
    error: string[],
    result?: {
        [key: string]: {
            a: string[],
            b: string[],
            c: string[],
            v: string[],
            p: string[],
            t: number[],
            1: string[],
            h: string[],
            o: string
        }
    }
}

export interface KrakenHistoryMarketPriceResponse {
    error: string[],
    result?: {
        [key: string]: {
            [key: string]: (string | number[])[], // [<price>, <volume>, <timestamp>]
        }
    }
}

export interface BinanceMarketPriceResponse {
    symbol: string,
    price: string
}

export type BinanceHistoryMarketPriceResponse = {
    id: number,
    price: string,
    qty: string,
    quoteQty: string,
    time: number,
    isBuyerMaker: boolean,
    isBestMatch: boolean
}[]

export type BitfinexMarketPriceResponse = string[];

export type BitfinexHistoryMarketPriceResponse = Array<number[]>;

export interface HuobiMarketPriceResponse {
    status:	string	//Status of API response
    ch: string // The data stream. It may be empty as some API doesn't have data stream
    ts:	number //The UTC timestamp when API respond, the unit is millisecond
    tick: { // The body data in response
        id: number // The UNIX timestamp in seconds as response id
        amount: number // Accumulated trading volume, in base currency
        close: number // The closing price
        count: number // The number of completed trades
        high: number // The high price
        low: number // The low price
        open: number // The opening price
        version: number 
        vol: number // Accumulated trading value, in quote currency
    }
}

export interface HuobiHistoryMarketPriceResponse {
    status:	string	//Status of API response
    ch: string // The data stream. It may be empty as some API doesn't have data stream
    ts:	number //The UTC timestamp when API respond, the unit is millisecond
    data: Array<{ // The body data in response
        id: number // The UNIX timestamp in seconds as response id
        ts:	number //The UTC timestamp when API respond, the unit is millisecond
        data: Array<{
            id: number // The unique trade id of this trade (to be obsoleted)
            "trade-id": number // The unique trade id (NEW)
            amount: number // The trading volume in base currency
            price: number // he trading price in quote currency
            ts:	number //The UNIX timestamp in milliseconds adjusted to Singapore time
            direction: 'buy' | 'sell' // The direction of the taker trade: 'buy' or 'sell'
        }>
    }>
}

export const getKrakenPair = async (pair: string): Promise<KrakenMarketPriceResponse> => {
    const res = await fetch(KrakenEndpoint(pair));
    return res.json();
}

export const getBinancePair = async (pair: string): Promise<BinanceMarketPriceResponse> => {
    const res = await fetch(BinanceEndpoint(pair));
    return res.json();
}

export const getBitfinexPair = async (pair: string): Promise<BitfinexMarketPriceResponse> => {
    const res = await fetch(BitfinexEndpoint(pair));
    return res.json();
}

export const getHuobiPair = async (pair: string): Promise<HuobiMarketPriceResponse> => {
    const res = await fetch(HuobiEndpoint(pair));
    return res.json();
}

// HISTORY ENDPOINTS

export const getKrakenPairHistory = async (pair: string): Promise<KrakenHistoryMarketPriceResponse> => {
    const res = await fetch(KrakenHistoryEndpoint(pair));
    return res.json();
}

export const getBinancePairHistory = async (pair: string): Promise<BinanceHistoryMarketPriceResponse> => {
    const res = await fetch(BinanceHistoryEndpoint(pair));
    return res.json();
}

export const getBitfinexPairHistory = async (pair: string): Promise<BitfinexHistoryMarketPriceResponse> => {
    const res = await fetch(BitfinexHistoryEndpoint(pair));
    return res.json();
}

export const getHuobiPairHistory = async (pair: string): Promise<HuobiHistoryMarketPriceResponse> => {
    const res = await fetch(HuobiHistoryEndpoint(pair));
    return res.json();
}