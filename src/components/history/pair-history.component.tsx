import { Grid, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useBinanceHistoryData } from '../../api/binance/useBinanceData';
import { useBitfinexHistoryData } from '../../api/bitfinex/useBitfinexData';
import { useHuobiHistoryData } from '../../api/huobi/useHuobiData';
import { useKrakenHistoryData } from '../../api/kraken/useKrakenData';
import { HistoryData } from '../../api/types';
import { ListComp } from '../list.component';

export const PairHistory = ({provider, pair}: { provider: string, pair: string}) => {
    const binanceHistory = useBinanceHistoryData(pair);
    const krakenHistory = useKrakenHistoryData(pair);
    const bitfinexHistory = useBitfinexHistoryData(pair);
    const huobiHistory = useHuobiHistoryData(pair);
    
    const historyData: () => HistoryData | undefined = useCallback(() => {
        if(provider.toLowerCase() === 'binance'){
            const { history } = binanceHistory;
            return history
        } else if(provider.toLowerCase() === 'kraken'){
            const { history } = krakenHistory;
            return history
        } else if(provider.toLowerCase() === 'bitfinex'){
            const { history } = bitfinexHistory;
            return history
        } else if(provider.toLowerCase() === 'huobi') {
            const { history } = huobiHistory;
            return history;
        }
    }, [binanceHistory, bitfinexHistory, huobiHistory, krakenHistory, provider]);

    return (
        <Grid container style={{ border: '1px solid' }}>
            {historyData() && Object.entries(historyData()!).map((value, index) => (
                <Grid key={index} item xs={12} sm={12} md={6} lg={6}>
                    {value[1].length > 0 ?
                        <ListComp data={value[1]} dataKey={value[0]}/> :
                        <div>
                            <Typography
                                variant="caption"
                                gutterBottom
                                m={2}
                                fontSize="1em"
                            >
                                Pair not supported
                            </Typography>
                        </div>}
                </Grid>
            ))}
        </Grid>
    )
}