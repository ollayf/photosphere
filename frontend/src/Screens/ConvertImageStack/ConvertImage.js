import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Image } from 'react-native';
import { ApplicationProvider, IconRegistry, Divider, Layout, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../../theme-context';
import { Avatar, Title, Caption, Text, TouchableRipple, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import Share from 'react-native-share'



const ProfileScreen = ({navigation}) => {
  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  return (
      <SafeAreaView style= {styles.container}>

        <ScrollView style = {styles.topPadding}>

          <View style = {styles.topBox}> 
          

            <View style = {styles.titleWrapper}> 

            <Text style = {styles.textTitle}> 
            Convert panoramic images to 360 degrees images </Text> 
            <Icon 
            name = 'swap-horizontal'
            size = {22}
            /> 
            <Icon 
            name = 'image'
            size = {22}
            /> 

            </View>
          </View>

          <View style = {styles.componentWrapper}>
            
            <View style = {styles.headerWrapper}> 
              <Text style = {styles.headerOfInput}>Image label</Text>
              <Icon name = 'label'
                size = {22}
              />

              </View>
                <Input 
                style = {styles.input}
                placeholder = 'Eg. Location'>
                </Input>
                
            
            


          </View>

          <View style = {styles.componentWrapper}>

            <View style = {styles.headerWrapper}> 
              <Text style = {styles.headerOfInput}>Date</Text>
              <Icon name = 'calendar-range'
                size = {22}
              />

              </View>
                <Input 
                style = {styles.input}
                placeholder = 'When was this taken?'/>               
                
               
                
            
          </View>

          <View style = {styles.uploadButtonWrapper}>
            <Button 
             onPress= {() => {}}
             style = {styles.uploadButton}
             icon = 'upload' 
             size = {40}>
             Upload panoramic image      
             </Button>

          
          </View>

          <Button 
             onPress= {() => {}}
             style = {styles.convertButton}
             icon = 'swap-horizontal-circle'
             labelStyle = {{fontSize: 20}}
          > 
          CONVERT    
             </Button>

          
          
        

        </ScrollView>

       


      </SafeAreaView> 

  )

}

export default ProfileScreen; 
  
  
  
          




const styles = StyleSheet.create({
container: {
marginTop: 10,
flex: 1,


//justifyContent: 'center',
// alignItems:'center'
}, 

topPadding:{ 
  paddingTop: 10, 
  paddingBottom: 20,

},

topBox:{
  height: 50, 
  backgroundColor: 'teal',
  flex: 1,
  marginTop: 5,

},

titleWrapper:{
  marginTop: 0,
  flexDirection: 'row', 
  justifyContent: 'center',
  marginTop: 12,
},

textTitle:{
  fontWeight: 'bold',
  fontSize: 15,
  color: 'white',


},

headerWrapper:{
  flexDirection: 'row',

},

headerOfInput:{
  marginLeft: 10,
  marginRight: 5

},

componentWrapper: { 
  marginTop: 20,

},

input: {
  marginLeft: 10,
  width: 400,

},

uploadButton: {
  

},

convertButton:{ 
  marginTop: 30,
  
},


uploadButtonWrapper:{
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 20,


},


changeMode: { 
flex: 0, 
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'center' ,
},


})