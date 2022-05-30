import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Icon, Layout, Text, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context';
import Smallerlogo from '../Components/Smallerlogo'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export default function SignUpScreen ({ navigation }) {

  const themeContext = React.useContext(ThemeContext);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );
  
  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  


  return (
    <SafeAreaView style={styles.container}>
    <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
    <Divider/>
    <Layout style={styles.ChangeMode}>
      <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>CHANGE MODE</Button>
    </Layout>

    <Layout style={styles.header}>
      <Smallerlogo>
      </Smallerlogo>
    

      </Layout>


      <Layout style={styles.loginoptions}>
      <Text 
        category= 'h5'>
        Create a new PhotoSphere account!

        </Text>

      <Input 
      style={styles.input}
      placeholder= 'Name'
      size='large'
      > 
      </Input> 

      <Input 
      style={styles.input}
      placeholder= 'Email'
      keyboardType= 'email-address'
      size='large'
      > 
     
      </Input> 
      
      <Input 
      style={styles.input}
      placeholder= 'Password'
      size='large'
      > 
      </Input>
      <Button 
      style= {styles.SignUpButton}
      appearance= 'filled'
      status= 'primary'
      size = 'giant'>
      
      SIGN UP 
      </Button>
      <Text 
      style= {styles.AlreadyHaveAccountText}>
      Already have an account?  
     
      </Text> 
      <Button
      style= {styles.Login}
      appearance= 'ghost'
      onPress={navigateLogin} 
    >
     Login here </Button>

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

header: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}, 

ChangeMode: { 
  flex: 0, 
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
},

loginoptions: { 
  marginTop: 0,
  alignItems: 'center',
  
  
},

input:{ 
  borderWidth: 3, 
  borderColor: 'indigo',
  padding: 8, 
  margin: 2, 
  width: 200, 
  justifyContent: 'center',
  alignItems: 'center',
  
}, 

SignUpButton: {
  marginTop: 1,
  marginBottom: 5,
  width: 250,
  backgroundColor: 'teal'
},
AlreadyHaveAccountText:{ 
  marginTop: 10
},
Login: { 
  marginBottom: 50
},
})
