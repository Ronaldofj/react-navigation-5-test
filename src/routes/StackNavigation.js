import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

export default StackNavigation;