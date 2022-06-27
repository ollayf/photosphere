import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import {  Button, Divider, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function AppMainPage ({ navigation }) {

  const { Navigator, Screen } = createBottomTabNavigator();


  const navigateConvert = () => {
    navigation.navigate('Convert');
  };

  const navigateExplore = () => {
    navigation.navigate('Explore');
  };

  const navigateProfile = () => {
    navigation.navigate('Profile');
  };
  const navigateAppMainPage = () => {
    navigation.navigate('AppMainPage');
  };



  
    const themeContext = React.useContext(ThemeContext);

    const ProfileIcon = (props) => (
      <Icon 
      {...props} 
      name='person-outline'
      onSelect = {navigateProfile}
 
      />
    );

    const ConvertIcon = (props) => (
      <Icon 
      {...props} name='swap-outline'
      onSelect = {navigateConvert}
      />
    );

    const ExploreIcon = (props) => (
      <Icon
       {...props} 
       name = 'compass-outline'
       onSelect = {navigateExplore}
       />
    );

    const ViewIcon = (props) => (
      <Icon 
      {...props} 
      name='eye-outline'
      onSelect = {navigateAppMainPage}
      />
    );

    const useBottomNavigationState = (initialState = 0) => {
      const [selectedIndex, setSelectedIndex] = React.useState(initialState);
      return { selectedIndex, onSelect: setSelectedIndex };
    };
    const bottomState = useBottomNavigationState();
    
    
    
    return (
        <SafeAreaView style={styles.container}>
          <TopNavigation title='My App' alignment='center'/>
          <Divider/>
          <Layout style={styles.ChangeMode}>
            <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>CHANGE MODE</Button>
            
            </Layout>
             
            
            <Text 
            category = 'h1'
            style = {styles.header}
            > View your 360 degree images </Text> 
             
            <BottomNavigation style={styles.bottomNavigation} {...bottomState}>
            <BottomNavigationTab icon={ConvertIcon}/>
            <BottomNavigationTab icon={ViewIcon}/>
            <BottomNavigationTab icon={ExploreIcon}/>
            <BottomNavigationTab icon={ProfileIcon}/>
          
            </BottomNavigation>


            




          
          </SafeAreaView>
          )
    }

    const styles = StyleSheet.create({
container: {
  flex: 1,
  
  //justifyContent: 'center',
 // alignItems:'center'
 }, 

ChangeMode: { 
  flex: 0, 
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center' ,
},

header: {
  flex: 1, 
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20, 
  
}, 

BottomNavigation: { 
  marginVertical:8, 
},
    })