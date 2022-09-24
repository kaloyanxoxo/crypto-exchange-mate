import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import React, {  useContext, useMemo, useCallback, useState } from 'react';
import { useBinancePriceData } from '../api/binance/useBinanceData';
import { useBitfinexPriceData } from '../api/bitfinex/useBitfinexData';
import { useHuobiPriceData } from '../api/huobi/useHuobiData';
import { useKrakenPriceData } from '../api/kraken/useKrakenData';
import { ResponseType } from '../api/types';
import { BaseContext } from '../store/context';
import { HistoryModal } from './history/modal.component';

export const buildPair = (base: string, second: string, pair: string) => {
    return pair !== '' ? pair : `${base.toUpperCase()}${second.toUpperCase()}`
};

export const PricesDisplay = ({ noModal=false }: { noModal?: boolean }) => {
    const { state: { baseCurrency, secondCurrency, pair } } = useContext(BaseContext);
    const [isOpen, setIsOpen] = useState(false);
    const [provider, setProvider] = useState('');
    const finalPair = useMemo(() => buildPair(baseCurrency, secondCurrency, pair), [baseCurrency, secondCurrency, pair]);
    const krakenResponse = useKrakenPriceData(finalPair);
    const bitfinexResponse = useBitfinexPriceData(finalPair);
    const huobiResponse = useHuobiPriceData(finalPair);
    const binanceResponse = useBinancePriceData(finalPair);

    const responses: [string, ResponseType][] = [
        ["Binance", binanceResponse],
        ["Kraken", krakenResponse],
        ["Bitfinex", bitfinexResponse],
        ["Huobi", huobiResponse]
    ]

    const displayPrice = useCallback((response: ResponseType) => {
        return response.pairPrice ?
            response.pairPrice.toPrecision(6) :
            "Pair not supported"
    },[]);

    const closeModal = useCallback(() => {
        setIsOpen(false)
    }, []);

    const openModal = useCallback((response: [string, ResponseType]) => {
        if(noModal) { return; }
        if(!response[1].pairPrice) {return;}
        setIsOpen(true)
        setProvider(response[0])
    }, [noModal]);

    return (
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Box margin="2px 10px" padding="5px 5px">
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            fontStyle="italic"
                            m={2}
                            fontSize="1.3em"
                            style={{
                                fontVariantCaps: 'small-caps'
                            }}
                        >
                            Selected Pair:
                            <span style={{fontSize: "1.4em", fontWeight: "bold", paddingLeft: ".7em"}}>
                                {finalPair}
                            </span>
                        </Typography>
                        <List style={{ margin: "50px 10px", padding: "20px 5px"}}>
                            { responses.map((response) => 
                                    <ListItem
                                        key={response[0]}
                                        divider
                                        button
                                        onClick={() => openModal(response)}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            margin: "25px 0",
                                            padding: "10px, 0",
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            fontSize="1.1em"
                                            padding="0px"
                                            lineHeight="6px"
                                            fontWeight="bolder"
                                        >
                                            {response[0]}
                                        </Typography>
                                        <Typography
                                            variant="overline"
                                            fontSize="1em"
                                            padding="0px"
                                            lineHeight="6px"
                                        >
                                            {displayPrice(response[1])}
                                        </Typography>
                                    </ListItem>
                                )
                            }
                        </List>
                        {!noModal && <HistoryModal
                            isOpen={isOpen}
                            handleClose={closeModal}
                            provider={provider}
                            pair={pair}
                        />}
                    </Box>
                </Grid>
            </Grid>
    )
}