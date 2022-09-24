import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { PricesDisplay } from '../../components/prices-display.component';
import { useContext } from 'react';
import { BaseContext } from '../../store/context';
import { StateActionTypes } from '../../store/actions';

export const Pair = () => {
    const {pair: pairParams} = useParams();
    const {dispatch} = useContext(BaseContext);

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
                    <PricesDisplay />
                </Grid>
            </Grid>
        </Box>
    )
}