import { TextField, Typography, Autocomplete, Box, Divider, Container } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useContext } from 'react';
import { StateActionTypes } from '../store/actions';
import { BaseContext } from '../store/context';
import { cryptocurrencies, cryptocurrencyPairs } from '../store/data';

export const Search = () => {
    //  dispatch either one of both to be stored in the context
    const [secondCurrencyFieldVisible, setSecondCurrencyFieldVisible] = useState<boolean>(false);
    const {state, dispatch} = useContext(BaseContext);

    const onPairSet = useCallback((e: React.SyntheticEvent, value: string | null) => {
        setSecondCurrencyFieldVisible(false);
        value && dispatch({ type: StateActionTypes.SET_PAIR, payload: value})
    }, [dispatch]);

    const onBaseCurrencyChange = useCallback((e: React.BaseSyntheticEvent, value: string | null) => {
        if(value !== null) {
            dispatch({ type: StateActionTypes.SET_BASE_CURRENCY, payload: value})
            setSecondCurrencyFieldVisible(true);
        } else {
            setSecondCurrencyFieldVisible(!secondCurrencyFieldVisible);
        }

        return value;
    }, [dispatch, secondCurrencyFieldVisible]);

    const onSecondCurrencyChange = useCallback((e: React.BaseSyntheticEvent, value: string | null) => {
        value && dispatch({ type: StateActionTypes.SET_SECOND_CURRENCY, payload: value})
    }, [dispatch]);

    return (
        <Container maxWidth="md">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                m="1em auto 3em auto"
            > { /*First way of select wrapper */ }
                <Typography
                    variant="h5"
                    gutterBottom
                    mt={2}
                    mb={6}
                    fontSize="1.4em"
                    style={{
                        fontVariantCaps: 'small-caps'
                    }}
                >
                    In order to search, you can either:
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="left"
                    gutterBottom
                    fontStyle="italic"
                    mt={2}
                    mb={2}
                >
                    1: choose currencies from the fields below
                </Typography>
                <Autocomplete
                    disablePortal
                    id="base-currency"
                    options={cryptocurrencies}
                    sx={{ width: 300 }}
                    isOptionEqualToValue={(option, value) => option === value}
                    value={state.baseCurrency}
                    renderInput={(params) => <TextField {...params} label="Base Currency" />}
                    onChange={onBaseCurrencyChange}
                />
                { secondCurrencyFieldVisible ?
                    <>
                        <Typography
                            variant="subtitle1"
                            align="left"
                            gutterBottom
                            fontStyle="italic"
                            mt={2}
                            mb={2}
                        >
                            2. choose second currency for the pair
                        </Typography>
                        <Autocomplete
                            disablePortal
                            id="second-currency"
                            options={cryptocurrencies}
                            sx={{ width: 300 }}
                            value={state.secondCurrency}
                            renderInput={(params) => <TextField {...params} label="Second Currency" />}
                            onChange={onSecondCurrencyChange}
                        />
                    </> : null
                }
            </Box>
            <Divider variant="middle" />
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                m="1em auto"
            > 
                <Typography
                    variant="overline"
                    align="center"
                    gutterBottom
                    mt={2}
                >
                    or choose from our predefined pairs
                </Typography>
                <Autocomplete
                    disablePortal
                    id="pair-select"
                    options={cryptocurrencyPairs}
                    isOptionEqualToValue={(option,value) => option === value}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Pair" />}
                    value={state.pair}
                    onChange={onPairSet}
                />
            </Box>
        </Container>
    )
};