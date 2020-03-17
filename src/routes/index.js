import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import { DefaultTheme, DarkTheme } from '../styles/theme.js';

// Navigations
import StackNavigation from './StackNavigation';

function Routes() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <ThemeProvider theme={theme === 'dark' ? DarkTheme : DefaultTheme}> 
        <StatusBar barStyle={theme === 'dark' ? 'light-content': 'dark-content'}></StatusBar>
        <StackNavigation />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default Routes;