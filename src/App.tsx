import React from 'react';
import { CssBaseline } from '@mui/material';
import { Router } from '../src/screens/router'
import NavigationBar from './components/navigation.component';
import { BaseProvider } from './store/provider';
import { MyThemeProvider } from './components/theme-provider'


function App() {
  return (
    <BaseProvider>
      <MyThemeProvider>
        <>
          <CssBaseline />
          <div className="App">
            <NavigationBar />
            <Router />
          </div>
        </>
      </MyThemeProvider>
    </BaseProvider>
  );
}

export default App;
