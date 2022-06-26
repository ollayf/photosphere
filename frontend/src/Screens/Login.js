import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import {  Button, Divider, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context'
import Passwordinput from '../Components/Passwordinput'
import { EMaskUnits } from 'react-native-svg';
//import * as React from 'react';

import Logo from '../Components/Logo'


const BackIcon = (props) => (
<Icon {...props} name='arrow-back' />
);

export default function LoginScreen ({ navigation }) {
  
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
    navigation.navigate('ForgetPassword');
  };


 
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title='Login' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={styles.ChangeMode}>
        <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>CHANGE MODE</Button>
      </Layout>

      <Layout style={styles.header}>
        <Logo>    
        </Logo>
      </Layout>
      
      <Layout style={styles.loginoptions}>
      <Input 
      style={styles.input}
      placeholder= 'Email'
      keyboardType= 'email-address'
      
      > 
     
      </Input> 

      <Passwordinput> 
      </Passwordinput> 


      <Button
      style= {styles.forgotpassword} 
      appearance= 'ghost'
      size='small'
      status= 'danger'
      onPress= {navigateForgetPassword}> 
      Forgot your password?
      </Button>

      <Button 
      style= {styles.LoginButton}
      appearance= 'filled'
      status= 'primary'
      size = 'giant'>
      
      LOGIN 
      </Button>
      <Text 
      style= {styles.NoAccountText}>
      Don't have an account?  
     
      </Text> 
      <Button
      style= {styles.CreateAccount}
      appearance= 'ghost'
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

forgotpassword:{ 
  marginTop: 1, 
  marginBottom: 20
},

LoginButton: {
  marginTop: 1,
  marginBottom: 5,
  width: 250,
  backgroundColor: 'teal'
},
NoAccountText:{ 
  marginTop: 5
},
CreateAccount: { 
  marginBottom: 20
},

  
})