import { useQuery } from "@tanstack/react-query";
import { getBinancePair, BinanceMarketPriceResponse, getBinancePairHistory, BinanceHistoryMarketPriceResponse } from "../requests";
import { HistoryData, HistoryResponseType, RequestTypes, ResponseType } from "../types";

export const useBinancePriceData = (desiredPair: string): ResponseType => {
    const { data, isLoading, isError } = useQuery<BinanceMarketPriceResponse, Error>([
                                        RequestTypes.GET_PAIR_PRICE_BINANCE, desiredPair],
                                        () => getBinancePair(desiredPair),
                                        { retry: false, refetchInterval: 7 }
    );

    const pairPrice = !isLoading && data ? Number(data.price) : undefined;

    return { pairPrice, isLoading, isError }
}

export const useBinanceHistoryData = (desiredPair: string): HistoryResponseType => {
    const { data, isLoading, isError } = useQuery<BinanceHistoryMarketPriceResponse, Error>([
                                        RequestTypes.GET_HISTORY_BINANCE, desiredPair],
                                        () => getBinancePairHistory(desiredPair),
                                        { retry: false, refetchInterval: 7 }
    );

    let history: HistoryData = { buy: [], sell: []};

    data && Object.values(data).forEach((trade) => {
        trade.isBuyerMaker === true ?
        history.buy.push(Number(trade.price)) :
        history.sell.push(Number(trade.price))
    });

    return { history, isLoading, isError }
}