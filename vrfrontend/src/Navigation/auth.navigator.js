import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator headerMode='none'>
    {/* <Stack.Screen name='Login' component={LoginScreen} /> */}
  </Stack.Navigator>
);