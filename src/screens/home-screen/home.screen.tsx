import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { PricesDisplay } from '../../components/prices-display.component';
import { Search } from '../../components/search.component';
import { BaseContext } from '../../store/context';

export const Home = () => {
    const { state: { baseCurrency, secondCurrency, pair } } = useContext(BaseContext)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Search />
                </Grid>
                {(baseCurrency !== '' && secondCurrency !== '') || pair !== '' ?
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <PricesDisplay />
                    </Grid> : null}
            </Grid>
        </Box>
    )
}