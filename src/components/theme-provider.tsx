import React, { FunctionComponent, ReactNode, useContext } from 'react';
import { BaseContext } from '../store/context';
import { createTheme, ThemeProvider } from '@mui/material';

export const MyThemeProvider: FunctionComponent<{ children?: ReactNode }> = ({children}: { children?: ReactNode }) => {
    const { state: { mode } } = useContext(BaseContext);

    const myTheme = React.useMemo(() =>
      createTheme({
        palette: {
          mode,
        },
    }),[mode]);

    return (
        <ThemeProvider theme={myTheme}>
            {children}
        </ThemeProvider>
    )
}