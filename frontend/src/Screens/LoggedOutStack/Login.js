import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import {   Divider, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../../theme-context'
import Passwordinput from '../../Components/Passwordinput'
import { EMaskUnits } from 'react-native-svg';
//import * as React from 'react';
import { Button } from 'react-native-paper';

import Logo from '../../Components/Logo'



const BackIcon = (props) => (
<Icon {...props} name='arrow-back' />
);

export default function LoginScreen ({ navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const themeContext = React.useContext(ThemeContext);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const navigateSignUp = () => {
    navigation.navigate('Sign Up');
  };

  const navigateForgetPassword = () => {
    navigation.navigate('Forget Password');
  };

  const navigateProfile = () => {
    
    navigation.navigate('Profile');
  };


 
  return (
    <SafeAreaView style={styles.container}>

      <Layout style={styles.header}>
        <Logo>    
        </Logo>
      </Layout>
      
      <Layout style={styles.loginoptions}>
      <Input 
      style={styles.input}
      placeholder= 'Email'
      keyboardType= 'email-address' 
      value = {email} 
      onChangeText= { text => setEmail(text)}
      > 
     
      </Input> 

      <Input 
      style={styles.input}
      placeholder= 'Password'
      //keyboardType= '' 
      value = {password} 
      onChangeText= { text => setPassword(text)}
      secureTextEntry
      >

      </Input>



      <Button
      style= {styles.forgotPassword} 
      labelStyle= {{fontSize: 10}}
      color={'red'}
      onPress= {navigateForgetPassword}> 
      Forgot your password?
      </Button>

      <Button 
      style= {styles.loginButton}
      icon = 'login-variant'
      color = {'white'}
      labelStyle= {{fontSize: 22}}
      
      onPress = {navigateProfile}
      >
      
      LOGIN 
      </Button>
      <Text 
      style= {styles.noAccountText}>
      Don't have an account?  
     
      </Text> 
      <Button
      style= {styles.createAccount}
      
      onPress={navigateSignUp}
      > 

      Create an account now! </Button>

      </Layout>

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  
  //justifyContent: 'center',
 // alignItems:'center'
 }, 

changeMode: { 
  flex: 0, 
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center' ,
},

header: {
  flex: 1, 
  justifyContent: 'center',
  alignItems: 'center',
}, 

loginoptions: { 
  alignItems: 'center',
},

input:{ 
  borderWidth: 3, 
  borderColor: 'indigo',
  padding: 8, 
  margin: 2, 
  width: 300, 
  justifyContent: 'center',
  alignItems: 'center',
}, 

forgotPassword:{ 
  marginTop: 1, 
  marginBottom: 20
},

loginButton: {
  marginTop: 1,
  marginBottom: 5,
  width: 250,
  backgroundColor: 'teal'
},
noAccountText:{ 
  marginTop: 5
},
createAccount: { 
  marginBottom: 20
},

  
})