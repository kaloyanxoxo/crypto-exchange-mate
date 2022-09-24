import { useQuery } from "@tanstack/react-query";
import { getKrakenPair, getKrakenPairHistory, KrakenHistoryMarketPriceResponse, KrakenMarketPriceResponse } from "../requests";
import { HistoryData, HistoryResponseType, RequestTypes, ResponseType } from "../types";

export const useKrakenPriceData = (desiredPair: string): ResponseType => {
    const { data, isLoading, isError } = useQuery<KrakenMarketPriceResponse, Error>([
                                        RequestTypes.GET_PAIR_PRICE_KRAKEN, desiredPair],
                                        () => getKrakenPair(desiredPair),
                                        { retry: false, refetchInterval: 7 }
    );

    const pairPrice = !isLoading && data?.result ? Number(Object.entries(data.result)[0][1].c[0]) : undefined;
    return { pairPrice, isLoading, isError }
}

export const useKrakenHistoryData = (desiredPair: string): HistoryResponseType => {
    const { data, isLoading, isError } = useQuery<KrakenHistoryMarketPriceResponse, Error>([
                                        RequestTypes.GET_HISTORY_KRAKEN, desiredPair],
                                        () => getKrakenPairHistory(desiredPair),
                                        { retry: false, refetchInterval: 7 }
    );
    let history: HistoryData = { buy: [], sell: []};

    if(data?.result){
        let keys = Object.keys(Object.values(data?.result)[0]);
        let valuesArray = Object.values(data?.result)[0];
        keys.forEach((key: string) => {
            valuesArray[key].forEach((res: string | number[]) => {
                key === "asks" ?
                history.sell.push(Number(res[0])) :
                history.buy.push(Number(res[0]))
            });
        })
    }
    
    return { history, isLoading, isError }
}