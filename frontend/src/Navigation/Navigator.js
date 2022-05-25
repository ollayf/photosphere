import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Containers/Home';
import DetailsScreen from '../Containers/Details';
import LoginScreen from '../Containers/Login';
// import {AuthNavigator} from './auth.navigator'

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Details' component={DetailsScreen}/>
    <Screen name='Login' component={LoginScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
    {/* <AuthNavigator /> */}
  </NavigationContainer>
);