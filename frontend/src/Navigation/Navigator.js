import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import SignUpScreen from '../Screens/Sign Up';
import LoginScreen from '../Screens/Login';
import ForgetPasswordScreen from '../Screens/ForgetPassword';
import ProfileScreen from '../Screens/Profile'
// import {AuthNavigator} from './auth.navigator'


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Sign Up' component={SignUpScreen}/>
    <Screen name='Login' component={LoginScreen}/>
    <Screen name='ForgetPassword' component={ForgetPasswordScreen}/>
    <Screen name='Profile' component={ProfileScreen}/>
  

  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
    {/* <AuthNavigator /> */}
  </NavigationContainer>
);