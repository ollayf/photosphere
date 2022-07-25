import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, ApplicationProvider, IconRegistry, Divider, Layout, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../../theme-context';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import Share from 'react-native-share'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from '../../utils/auth';

const ProfileScreen = ({navigation}) => {

  const creds = useSelector(state => state.creds)
  const spheres = useSelector(state => state.spheres)
  var spheres_count = creds.spheres_count
  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  const navigateEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.userInfoSection}>
          <View style = {{flexDirection:'row', marginTop: 15}} > 
            <Avatar.Image
              source ={require('../../Components/Avatar.png')}
              size = {80}
            />

        <View style = {{marginLeft: 20}}>
          <Title 
          style = {styles.title}> 
          {creds.firstname} {creds.lastname} 
          </Title>

          <View style= {{flexDirection:'row'}}>
              <Caption style = {styles.caption}> @{creds.username} </Caption> 
              <TouchableRipple 
              onPress= {navigateEditProfile}

              style = {{}}
              
              >
              <Icon name = 'pencil'
              size = {25}
              style = {{marginLeft: 50}}></Icon>
              </TouchableRipple>
           </View>

         
          </View>
        </View> 
       </View> 

       <View style = {styles.userInfoSection}>
       <View style = {styles.row}>
       <Icon 
          name = "map-marker-radius" 
          size ={20} 
          color = "black"
          />
        <Text style = {styles.words}> Singapore </Text>
         
        
        </View>
      
        <View style = {styles.row}>
       <Icon 
          name = "email" 
          size ={20} 
          color = "black"
          />
        <Text style = {styles.words}> {creds.email} </Text>     
        </View>    
       </View> 


       <View style = {styles.BoxWrapper}>
        <View style = {styles.Box}> 
        <Title> {spheres_count}  </Title>
        <Caption> 360 Degree images </Caption>   
        </View>

        <View style = {styles.Box}> 
        <Title> 0  </Title>
        <Caption> Images shared </Caption>       
        </View>
       </View> 

       <View styles ={styles.menuWrapper}> 

        <TouchableRipple onPress= {() => {}}>
          <View style = {styles.menuItems}> 
            <Icon 
            name = 'cog-outline'
            color = 'teal'
            size = {25}
            ></Icon>
            <Text 
            style = {styles.menuItemsText}>
            Change Password
            </Text> 
          </View>
        </TouchableRipple>

        <TouchableRipple onPress= {navigateLogin}>
          <View style = {styles.menuItems}> 
            <Icon 
            name = 'logout' 
            color = 'red'
            size = {25}
            ></Icon>
            <Text 
            style = {styles.menuItemsText}>
            Log Out
            </Text> 
          </View>
        </TouchableRipple>



       </View>

       


      </SafeAreaView> 

  )

}

export default ProfileScreen; 
  
  
  
          




const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: 20,

//justifyContent: 'center',
// alignItems:'center'
}, 

changeMode: { 
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
  fontSize: 24, 
  lineHeight: 24, 
  fontWeight: 'bold',
  marginTop: 20, 
  marginBottom: 5, 
}, 

caption: { 
  fontSize: 14, 
  lineHeight: 14, 
  fontWeight: '500', 
},

row:{ 
  flexDirection: 'row',
  marginBottom: 10,
},

words:{ 
  color: 'black', 
  marginLeft: 20
},

BoxWrapper: {
  borderBottomColor: '#dddddd',
  flexDirection: 'row', 
  height: 100, 
  borderTopWidth: 1, 
  borderTopColor: '#dddddd',
  borderBottomWidth: 1,
},

Box: { 
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  borderRightColor: '#dddddd',
  borderRightWidth: 1
},

menuWrapper: { 
  marginTop: 10, 
},

menuItems: { 
  flexDirection: 'row',
  paddingVertical: 15, 
  paddingHorizontal: 30, 
}, 
menuItemsText:{ 
  color: 'black', 
  marginLeft: 20, 
  fontWeight: '600',
  fontSize: 16,
},


})