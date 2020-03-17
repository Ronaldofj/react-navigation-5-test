import React from 'react';

import { useSelector } from 'react-redux';

import { 
  NavigationContainer, 
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

// Navigations
import StackNavigation from './StackNavigation';

function Routes() {

  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default Routes;