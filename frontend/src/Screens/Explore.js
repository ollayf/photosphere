import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, ApplicationProvider, IconRegistry, Divider, Icon, Layout, Text, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context';
import Smallerlogo from '../Components/Smallerlogo'
import Passwordinput from '../Components/Passwordinput';
import * as eva from '@eva-design/eva';

import { EvaIconsPack } from '@ui-kitten/eva-icons';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);




export default function ExploreScreen ({ navigation }) {
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
        onPress = {navigateProfile}
   
        />
      );
  
      const ConvertIcon = (props) => (
        <Icon 
        {...props} name='swap-outline'
        onPress = {navigateConvert}
        />
      );
  
      const ExploreIcon = (props) => (
        <Icon
         {...props} 
         name = 'compass-outline'
         onPress = {navigateExplore}
         />
      );
  
      const ViewIcon = (props) => (
        <Icon 
        {...props} 
        name='eye-outline'
        onPress = {navigateAppMainPage}
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