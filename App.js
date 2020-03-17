import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Routes from './src/routes/';
import store from './src/store/index';
import theme from './src/styles/theme';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}