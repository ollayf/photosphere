import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../Screens/LoggedOutStack/Home';
import SignUpScreen from '../Screens/LoggedOutStack/Sign Up';
import LoginScreen from '../Screens/LoggedOutStack/Login';
import ForgetPasswordScreen from '../Screens/LoggedOutStack/ForgetPassword';
// import ProfileScreen from '../Screens/ProfileStack/Profile';
import EditProfileScreen from '../Screens/ProfileStack/EditProfile';
import ProfileScreen from '../Screens/ProfileStack/Profile'
import MenuOf360degreeImagesScreen from '../Screens/ViewImageStack/MenuOf360degreeImages';
import SeeOtherImagesScreen from '../Screens/ExploreStack/SeeOthersImages';
import UploadandConvertScreen from '../Screens/ConvertImageStack/UploadandConvert';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { ToastAndroid } from 'react-native';
import VRScene from '../Screens/VR/VrScene';

import {AuthNavigator} from './auth.navigator'


// //to delete
// const ProfileStack = createStackNavigator(); 

// function ProfileStackScreen () { 

//   return (
//   <ProfileStack.Navigator screenOptions={{headerShown: false}}> 
//     <ProfileStack.Screen name = "Profile" component={ProfileScreen} />
//     <ProfileStack.Screen name = "EditProfile" component={EditProfileScreen}/>
//   </ProfileStack.Navigator>
//   )
// }

const LoggedOutStack = createStackNavigator();
function LoggedOutStackScreen () { 
  return(
  <LoggedOutStack.Navigator initialRouteName='Home'> 
    <LoggedOutStack.Screen 
    name = "Home"
    options ={{
      title:'                                  Home',
      headerStyle:{
        backgroundColor: 'teal',
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold',
      }
    }} 
    component={HomeScreen} />
    <LoggedOutStack.Screen 
    name = "Sign Up" 
    component={SignUpScreen}
    options ={{
      title:'                     Sign Up',
      headerStyle:{
        backgroundColor: 'teal',
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold',
      }
    }} 
    />
    <LoggedOutStack.Screen 
    name = "Login" 
    component={LoginScreen}
    options ={{
      title:'                       Login',
      headerStyle:{
        backgroundColor: 'teal',
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold',
      }
    }} 
    /> 
    <LoggedOutStack.Screen 
    name = "Forget Password" 
    component={ForgetPasswordScreen}
    options ={{
      title:'              Forget Password',
      headerStyle:{
      backgroundColor: 'teal',
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
      fontWeight: 'bold',
      }
    }} 
    />
  </LoggedOutStack.Navigator>
  )
}

const ProfileStack = createStackNavigator(); 

function ProfileStackScreen () { 

  return (
  <ProfileStack.Navigator initialRouteName="ViewProfile" screenOptions={{headerShown: false}}> 
    <ProfileStack.Screen name = "ViewProfile" component={ProfileScreen} />
    <ProfileStack.Screen name = "EditProfile" component={EditProfileScreen}/>
  </ProfileStack.Navigator>
  )
}

const ViewingStack = createStackNavigator(); 

function ViewStackScreen () {
  return( 
  <ViewingStack.Navigator screenOptions={{headerShown: false}}> 
    <ViewingStack.Screen name = "Menu of 360 Degrees Images" component={MenuOf360degreeImagesScreen}/>
  </ViewingStack.Navigator>
  )
}

const ConversionStack = createStackNavigator(); 

function ConvertImageStackScreen () { 
  return(
  <ConversionStack.Navigator screenOptions={{headerShown: false}}> 
    <ConversionStack.Screen name = "Upload and Convert" component={UploadandConvertScreen}/>
  </ConversionStack.Navigator>
  )
}

const ExpStack = createStackNavigator(); 

function ExploreImagesStackScreen () { 
  return(
  <ExpStack.Navigator screenOptions={{headerShown: false}}>
    <ExpStack.Screen name = "See Other Images" component={SeeOtherImagesScreen}/>
  </ExpStack.Navigator>
  )
}

const Tab = createBottomTabNavigator ();

export function LoggedInScreen () { 
  return (
      <Tab.Navigator

      initialRouteName='Profile'
      
      screenOptions={({route}) => ({ 
        headerShown: false,
        tabBarIcon: ({focused, color, size, padding}) => {
          
          let iconName; 

          if (route.name === 'ViewImage') { 
            iconName = focused 
            ? 'eye' 
            : 'eye-outline'
          }

          else if (route.name === 'ConvertImage'){ 
          iconName = focused 
          ? 'swap-horizontal' 
          : 'swap-horizontal-outline'
          }

          else if (route.name === 'Explore'){ 
            iconName = focused 
            ? 'search' 
            : 'search-outline'
          }

          else if (route.name === 'Profile'){ 
            iconName = focused 
            ? 'person' 
            : 'person-outline'
          }

          return ( 
            <IonicIcon 
            name ={iconName} 
            size ={size} 
            color={color} 
            style ={{paddingBottom: padding}} 
            />
          );
        }, 

      })}
      tabBarOptions= {{ 
        activeTintColor: 'teal', 
        inactiveTintColor: 'grey', 
        labelStyle: {fontSize: 12}, 
        style: {}

      }}> 
        <Tab.Screen name= "ConvertImage" component={ConvertImageStackScreen}/>
        <Tab.Screen name= "ViewImage" component={ViewStackScreen} />
        <Tab.Screen name= "Explore" component={ExploreImagesStackScreen}/>
        <Tab.Screen name= "Profile" component={ProfileStackScreen}/>        
      </Tab.Navigator>
  )
} 
// /*const { Navigator, Screen } = createStackNavigator();

// const LoggedOutNavigator = () => (
//   <Navigator screenOptions={{headerShown: false}}>
//     <Screen name='Home' component={HomeScreen}/>
//     <Screen name='Sign Up' component={SignUpScreen}/>
//     <Screen name='Login' component={LoginScreen}/>
//     <Screen name='ForgetPassword' component={ForgetPasswordScreen}/>
//     <Screen name='Profile' component={ProfileScreen}/>
//     <Screen name='EditProfile' component={EditProfileScreen}/>
//   </Navigator>
// );




// export const HomeScreenNavigator = () => (
//   <NavigationContainer>
//     <LoggedOutNavigator/>
//   </NavigationContainer>
// );
// */


const OverallStack = createStackNavigator();
export function OverallStackScreen () {
  return (
  
  <NavigationContainer>
    <OverallStack.Navigator initialRouteName='Root'>
      <OverallStack.Screen
        name="Root"
        component={LoggedOutStackScreen}
        options= {{ headerShown: false }}
      />
      <OverallStack.Screen
        name="LoggedIn"
        component={LoggedInScreen}
        options= {{ headerShown: false }}
      />
      <OverallStack.Screen
        name="VR"
        component={VRScene}
        options= {{ headerShown: false }}
      />
    </OverallStack.Navigator>
  </NavigationContainer>
  )
}
