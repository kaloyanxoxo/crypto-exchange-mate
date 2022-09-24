import { useQuery } from "@tanstack/react-query";
import { getBitfinexPair, BitfinexMarketPriceResponse, getBitfinexPairHistory, BitfinexHistoryMarketPriceResponse } from "../requests";
import { HistoryData, HistoryResponseType, RequestTypes, ResponseType } from "../types";


export const useBitfinexPriceData = (desiredPair: string): ResponseType => {
    // Bitfinex is presenting USDT as UST, so we need to change it
    const editedPair = desiredPair.replace('USDT', 'UST');
    const { data, isLoading, isError } = useQuery<BitfinexMarketPriceResponse, Error>([
                                        RequestTypes.GET_PAIR_PRICE_BITFINEX, editedPair],
                                        () => getBitfinexPair(editedPair),
                                        { retry: false, refetchInterval: 7 }
    );

    const pairPrice = !isLoading && data ? Number(data[0]) : undefined;
    return { pairPrice, isLoading, isError }
}


export const useBitfinexHistoryData = (desiredPair: string): HistoryResponseType => {
    // Bitfinex is presenting USDT as UST, so we need to change it
    const editedPair = desiredPair.replace('USDT', 'UST');
    const { data, isLoading, isError } = useQuery<BitfinexHistoryMarketPriceResponse, Error>([
                                        RequestTypes.GET_HISTORY_BITFINEX, editedPair],
                                        () => getBitfinexPairHistory(editedPair),
                                        { retry: false, refetchInterval: 7 }
    );

    // If ask > bid => sell order
    // If bid > ask => buy order
    let history: HistoryData = { buy: [], sell: []};

    data && data.forEach((trade) => {
        trade[2] > 0 ?
        history.buy.push(Number(trade[3])) :
        history.sell.push(Number(trade[3]))  
    })
    return { history, isLoading, isError }
}