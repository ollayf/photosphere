import React from 'react';
import AppMainPage from '../Screens/AppMainPage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConvertImage from '../Screens/Convertimage';
import Explore from '../Screens/Explore';
import Profile from '../Screens/Profile';
import {  Button, Divider, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import {AppLoading} from 'expo';

const Tab = createBottomTabNavigator();
const ProfileIcon = (props) => (
    <Icon 
    {...props} 
    name='person-outline'

    />
  );

  const ConvertIcon = (props) => (
    <Icon 
    {...props} name='swap-outline'
   
    />
  );

  const ExploreIcon = (props) => (
    <Icon
     {...props} 
     name = 'compass-outline'
     />
  );

  const ViewIcon = (props) => (
    <Icon 
    {...props} 
    name='eye-outline' 
    />
  ); 

  const Tabs = () => { 
    return (
        <Tab.Navigator>
            <Tab.Screen  name = 'AppMainPage' component = {AppMainPage}/>
            <Tab.Screen  name = 'Convertimage' component = {ConvertImage}/>
            <Tab.Screen  name = 'Explore' component = {Explore}/>
            <Tab.Screen  name = 'Profile' component = {Profile}/>

        </Tab.Navigator>
    )
  }

  export default Tabs; 


