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
import { useDispatch, useSelector } from 'react-redux';
import { signup, login, usernameExists } from '../../utils/auth'
import { getSpheres } from '../../utils/spheres';
import { loadSpheres } from '../../Redux/actions';

const BackIcon = (props) => (
<Icon {...props} name='arrow-back' />
);

export default function LoginScreen ({ navigation }) {
  const spheres = useSelector(state => state.spheres)
  const dispatch = useDispatch()
  const username = useSelector(state => state.creds.username)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [incorrectAuth, setIncorrectAuth] = useState(false)
  
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

  const confirmLogInCreds = (creds) => {
    return{
      type: "loadProfile",
      payload: creds
    }
  }

  const navigateProfile = () => {
    login(email, password, navigation)
    .then((res) => {
      if (res.status != 200) {
        return false
      }
      return res.json()
    })
    .then( (data) => {
      // assuming res.status == 200
      if (!data) {
        return false
      }
      const creds = {
        user: {
          id: data.userId,
          email: data.email,
          username: data.username,
          firstname: data.firstname,
          lastname: data.lastname,
          spheres_count: data.spheres_count
        }
      }
      dispatch(confirmLogInCreds(creds))
      getSpheres(data.userId)
      .then( (res) => {
        if (res.status === 200) {
          return res.json()
        }
        return false
      })
      .then((data) => {
        if (data) {
          dispatch(loadSpheres(data.data))
        }
      })
      navigation.navigate('LoggedIn')
    }
    )
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
        autoCapitalize='none'
      > 
     
      </Input> 

      <Input 
        style={styles.input}
        placeholder= 'Password'
        //keyboardType= '' 
        value = {password} 
        onChangeText= { text => setPassword(text)}
        secureTextEntry
        autoCapitalize='none'
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