import { useQuery } from "@tanstack/react-query";
import { getHuobiPair, getHuobiPairHistory, HuobiHistoryMarketPriceResponse, HuobiMarketPriceResponse } from "../requests";
import { HistoryData, RequestTypes, ResponseType } from "../types";


export const useHuobiPriceData = (desiredPair: string): ResponseType => {
    const pair = desiredPair.toLowerCase();
    const { data, isLoading, isError } = useQuery<HuobiMarketPriceResponse, Error>([
                                        RequestTypes.GET_PAIR_PRICE_HUOBI, pair],
                                        () => getHuobiPair(pair),
                                        { retry: false, refetchInterval: 7 }
    );

    const pairPrice = !isLoading && !isError && data ? data?.tick?.close : undefined;
    return { pairPrice, isLoading, isError }
}

export const useHuobiHistoryData = (desiredPair: string) => {
    const pair = desiredPair.toLowerCase();
    const { data: result, isLoading, isError } = useQuery<HuobiHistoryMarketPriceResponse, Error>([
                                        RequestTypes.GET_HISTORY_HUOBI, pair],
                                        () => getHuobiPairHistory(pair),
                                        { retry: false, refetchInterval: 7 }
    );
    let history: HistoryData = { buy: [], sell: []};

    result?.data && result.data.forEach((trade) => {
        trade.data.forEach((bid) => {
            bid.direction === 'buy' ?
            history.buy.push(bid.price) :
            history.sell.push(bid.price)
        })
    })

    return { history, isLoading, isError }
}