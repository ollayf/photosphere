import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, ApplicationProvider, IconRegistry, Divider, Layout, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../../theme-context';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'

const SeeOtherImagesScreen = ({navigation}) => {
  

  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  return (
      <SafeAreaView style={styles.container}>
        
          <View style = {styles.searchBarHolder} > 
            <Input  
            style = {styles.searchBar}
            placeholder = 'Search for a user'
            
            > 
            </Input>

            <TouchableRipple
            onPress= {() => {}}>
              <View> 
                 <Icon 
                name = 'search-circle'
                 size = {40}> </Icon>
               </View>
             </TouchableRipple>

             

            
  

       </View>

       <Text>

              EXPLORE PAGE
             </Text> 


       


      </SafeAreaView> 


  )

}

export default SeeOtherImagesScreen;

const styles = StyleSheet.create({
  container: {
  marginTop: 10,
  flex: 1,
  },

  searchBarHolder: {
    flexDirection: 'row',
  },

  searchBar: { 
    width: 350,
    marginBottom: 40
  }
})
  