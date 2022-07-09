import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../Screens/LoggedOutStack/Home';
import SignUpScreen from '../Screens/LoggedOutStack/Sign Up';
import LoginScreen from '../Screens/LoggedOutStack/Login';
import ForgetPasswordScreen from '../Screens/LoggedOutStack/ForgetPassword';
import ProfileScreen from '../Screens/ProfileStack/Profile';
import EditProfileScreen from '../Screens/ProfileStack/EditProfile';
import ConvertImageScreen from '../Screens/ConvertImageStack/ConvertImage'; 
import ViewImageScreen from '../Screens/ViewImageStack/ViewImage';
import ExploreScreen from '../Screens/ExploreStack/Explore';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { ToastAndroid } from 'react-native';


/*import {AuthNavigator} from './auth.navigator'



const ProfileStack = createStackNavigator(); 
const ConvertImageStack = createStackNavigator(); 
const ViewImageStack = createStackNavigator();
const ExploreStack = createStackNavigator (); */

const Stack = createStackNavigator();
function LoggedOutStackScreen () { 
  return(
  <Stack.Navigator> 
    <Stack.Screen name = "Home" component={HomeScreen} />
    <Stack.Screen name = "Sign Up" component={SignUpScreen}/>
    <Stack.Screen name = "Login" component={LoginScreen}/> 
    <Stack.Screen name = "Forget Password" component={ForgetPasswordScreen}/>
  </Stack.Navigator>
  )
}
/*
function ProfileStackScreen{ 
  <ProfileStack.Navigator> 
    <ProfileStack.Screen name = "Profile" component={ProfileScreen} />
    <ProfileStack.Screen name = "Edit Profile" component={EditProfileScreen}/>
  </ProfileStack.Navigator>
}

function ViewImageStackScreen { 
  <ViewImageStack.Navigator> 
    <ViewImageStack.Screen name = "Explore" component={ViewImageScreen} />
  </ViewImageStack.Navigator>
}

function ConvertImageStackScreen { 
  <ConvertImageStack.Navigator> 
    <ConvertImageStack.Screen name = "Convert Image" component={ConvertImageScreen} />
  </ConvertImageStack.Navigator>
}


function ExploreStackScreen { 
  <ExploreStack.Navigator> 
    <ExploreStack.Screen name = "Explore" component={ExploreScreen} />
  </ExploreStack.Navigator>
}

const Tab = createBottomTabNavigator ();

export function LoggedInNavigation (props) { 
  return (
    <NavigationContainer> 
      <Tab.Navigator
      screenOptions={({route}) => ({ 
        headerTitle: () => <Text>Header</Text>,
        tabBarIcon: ({focused, color, size, padding}) => {
          let iconName; 
          if (route.name === 'View Image') { 
            iconName = focused ? 'eye' : 'eye-outline'
          }

          else if (route.name === 'Convert Image'){ 
          iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline'
          }

          else if (route.name === 'Explore'){ 
            iconName = focused ? 'search' : 'search-outline'
          }

          else if (route.name === 'Profile'){ 
            iconName = focused ? 'person' : 'person-outline'
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
        activeTintColor: 'lightseagreen', 
        inactiveTintColor: 'grey', 
        labelStyle: {fontSize: 16}, 
        style: {width: fullScreenWidth}

      }}> 
        <Tab.Screen name= "Convert Image" component={ConvertImageStackScreen}/> 
        <Tab.Screen name= "View Image" component={ViewImageStackScreen}/> 
        <Tab.Screen name= "Explore" component={ExploreStackScreen}/>
        <Tab.Screen name= "Profile" component={ProfileStackScreen}/>

        
      </Tab.Navigator>
    </NavigationContainer>
  )
} */
/*const { Navigator, Screen } = createStackNavigator();

const LoggedOutNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Sign Up' component={SignUpScreen}/>
    <Screen name='Login' component={LoginScreen}/>
    <Screen name='ForgetPassword' component={ForgetPasswordScreen}/>
    <Screen name='Profile' component={ProfileScreen}/>
    <Screen name='EditProfile' component={EditProfileScreen}/>
  </Navigator>
);*/



/*
export const HomeScreenNavigator = () => (
  <NavigationContainer>
    <LoggedOutNavigator/>
  </NavigationContainer>
);

export const LoggedInNavigator = () =>  ( 
  <NavigationContainer> 
    <LoggedInNavigator/>
  </NavigationContainer>
)
*/

export const AppNavigator = () => (
  <NavigationContainer> 
    <LoggedOutStackScreen/>
  
  </NavigationContainer>
)