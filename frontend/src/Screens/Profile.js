import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, ApplicationProvider, IconRegistry, Divider, Icon, Layout, Text, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context';
import Smallerlogo from '../Components/Smallerlogo'
import Passwordinput from '../Components/Passwordinput';
import * as eva from '@eva-design/eva';

import { Avatar } from '@ui-kitten/components';


import { EvaIconsPack } from '@ui-kitten/eva-icons';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);




export default function ProfileScreen ({ navigation }) {


  const [formData, setFormData] = useState({ 
    name: '', 
    email: ' ', 
    password: '', 
    //password2: ''
  })
  
  const {name, email, password} = formData

  
 // const onChange = (e) => {
    //setFormData((prevState) => ({
     // ...prevState, 
   //   [e.target.name]: e.target.value, 
   // }))

 // }
  const themeContext = React.useContext(ThemeContext);

  
  
  
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