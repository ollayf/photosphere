import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import VRScreen from '../Screens/VR';
// import SignUpScreen from '../Screens/Sign Up';
// import LoginScreen from '../Screens/Login';
// import ForgetPasswordScreen from '../Screens/ForgetPassword';
// import ProfileScreen from '../Screens/Profile'
// import EditProfileScreen from '../Screens/EditProfile';
//import ConvertImageScreen from '../Screens/Convertimage';
/*import ViewImageScreen from '../Screens/ViewImage';
import ExploreScreen from '../Screens/Explore';
import EditProfileScreen from '../Screens/EditProfileScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'*/
// import {AuthNavigator} from './auth.navigator'


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='VR' component={VRScreen}/>
  </Navigator>
);

/*const Stack = createStackNavigator();


function ViewImageStackScreen() {
  return ( 
    <Stack.Navigator> 
      <Stack.Screen name="ViewImage" component={ViewImageScreen}/>
    
    </Stack.Navigator>

  )
}

function ExploreStackScreen() {
  return ( 
    <Stack.Navigator> 
      <Stack.Screen name="Explore" component={ExploreScreen}/>
    
    </Stack.Navigator>

  )
}

function ProfileStackScreen() {
  return ( 
    <Stack.Navigator> 
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name= "EditProfile" component={EditProfileScreen}> </Stack.Screen> 
    
    </Stack.Navigator>

  )
  }

  const Tab = createBottomTabNavigator(); */ 


export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
   
    {/* <AuthNavigator /> */}
  </NavigationContainer>
);

/*const Stack = createStackNavigator();

function HomeStackScreen () {
  return( 
    <Stack.Navigator> 
    <Stack.screen> name = "Home"</Stack.screen>
    
    </Stack.Navigator>
  )
}*/