import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, ApplicationProvider, IconRegistry, Divider, Icon, Layout, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context';
import Smallerlogo from '../Components/Smallerlogo'
import Passwordinput from '../Components/Passwordinput';
import { Avatar, Title, Caption, Text, TouchabeRipple } from 'react-native-paper';


const ProfileScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
      <TopNavigation title='My App' alignment='center'/>
        <Divider/>
        <View style = {styles.userInfoSection}>
        <View> 
          <Avatar.Image
          source ={ { 
            uri: 'https://api.adorable.io/avatar/80/abott@adorable.png'
          }}
          size = {80}
          />
        </View>

     
        
          </View> 
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

userInfoSection: { 
  paddingHorizontal: 30,
  marginBottom: 25, 
},

title: { 
  fontSize: 14, 
  lineHeight: 14, 
  fontWeight: '500', 
}, 

row:{ 
  flexDirection: 'row',
  marginBottom: 10,
},

infoBoxWrapper: {
  borderBottomColor: '#ddddddd'
}

})