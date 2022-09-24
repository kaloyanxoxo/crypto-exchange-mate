import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { PricesDisplay } from '../../components/prices-display.component';
import { useContext } from 'react';
import { BaseContext } from '../../store/context';
import { StateActionTypes } from '../../store/actions';
import { PairHistory } from '../../components/history/pair-history.component';

export const PairDetails = () => {
    const {pair: pairParams} = useParams();
    const {state: { pair }, dispatch} = useContext(BaseContext);

    useEffect(() => {
        pairParams && pairParams !== ':pair' && dispatch({type: StateActionTypes.SET_PAIR, payload: pairParams?.toUpperCase().toString()})
    }, [dispatch, pairParams]);

    if (!pairParams || pairParams === ':pair') {
        return (
            <div>
                No Pair provided
            </div>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <PricesDisplay noModal/>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    {
                        ['binance', 'huobi', 'kraken', 'bitfinex'].map((provider, index) => (
                            <Fragment key={index} >
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
                                    Provider:
                                    <span style={{fontSize: "1.4em", fontWeight: "bold", paddingLeft: ".7em"}}>
                                        {provider}
                                    </span>
                                </Typography>
                                <PairHistory pair={pair} provider={provider}/>
                            </Fragment>
                        ))
                    }
                </Grid>
            </Grid>
        </Box>
    )
}