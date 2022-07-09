import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, ApplicationProvider, IconRegistry, Divider, Layout, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'

const ExploreScreen = ({navigation}) => {
  

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

             <Text style = {{fontSize : '20'}}>

              EXPLORE PAGE
             </Text> 


            
  

       </View>

       


      </SafeAreaView> 

  )

}

export default ExploreScreen; 
  
  
  
          

const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: 20,

//justifyContent: 'center',
// alignItems:'center'
}, 

searchBarHolder: {
  flexDirection:'row', 
  marginTop: 15,
  alignItems: 'center' ,
},

searchBar: {
  width: 250, 
  alignItems: 'center',

},

changeMode: { 
flex: 0, 
flexDirection: 'row',
justifyContent: 'flex-end',
},




})
