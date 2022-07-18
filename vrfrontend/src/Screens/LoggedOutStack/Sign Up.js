import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ApplicationProvider, IconRegistry, Divider, Layout, Text, Input, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../../theme-context';
import Smallerlogo from '../../Components/Smallerlogo'
import Passwordinput from '../../Components/Passwordinput';
import * as eva from '@eva-design/eva';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-paper';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { signup, usernameExists } from '../../utils/auth';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);


export default function SignUpScreen ({ navigation }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2]= useState('')
  const [pw_match, setPwMatch] = useState(true)
  const [nameState, setNameState] = useState(0)
  
  
 // const onChange = (e) => {
    //setFormData((prevState) => ({
     // ...prevState, 
   //   [e.target.name]: e.target.value, 
   // }))

 // }
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

  const navigateProfile = () => {
    if (!(name, password1, password2, email)) {
      setNameState(2)
      return
    }

    if (password1 != password2) {
      setPwMatch(false)
      return
    }
    usernameExists(name)
    .then((status) => {
      if (status == 200) {
        setNameState(1)
        return
      } else {
        console.log("Logging in")
        signup(email, name, password1, "", "", navigation);
      }
    })
  }

  function NameComment () {
    switch (nameState) {
      case 0:
        return (<></>);
      case 1:
        return (<Text style={styles.captionText}>
        Username Taken.
        </Text>);
      case 2:
        return (<Text style={styles.captionText}>
        Some of the fields are empty
        </Text>);
    }
  }
  


  return (
    <SafeAreaView style={styles.container}>
    

    <Layout style={styles.header}>
      <Smallerlogo>
      </Smallerlogo>
    

      </Layout>


      <Layout style={styles.loginoptions}>
      <Text 
        category= 'h5'>
        Create a new PhotoSphere account!

        </Text>

      <NameComment/>
      <Input 
      style={styles.input}
      placeholder= 'Username'
      autoCapitalize='none'
      value = {name} 
      onChangeText= { text => setName(text)}
      > 
      </Input> 

      <Input 
      style={styles.input}
      placeholder= 'Email'
      autoCapitalize='none'
      keyboardType= 'email-address' 
      value = {email} 
      onChangeText= { text => setEmail(text)}
      > 
      </Input> 
    
     
      <Input 
      style={styles.input}
      placeholder= 'Password'
      autoCapitalize='none'
      //keyboardType= '' 
      value = {password1} 
      onChangeText= { text => setPassword1(text)}
      secureTextEntry
      >

      </Input>
      <Text style={styles.captionText}>
      Should contain at least 1 uppercase, 1 lowercase and 1 special character
      </Text>
      <Input 
      style={styles.input}
      placeholder= 'Re-type your password'
      //keyboardType= '' 
      autoCapitalize='none'
      value = {password2} 
      onChangeText= { text => setPassword2(text)}
      secureTextEntry
      ></Input>
      
      {pw_match ? <></> :
        <Text style={styles.captionText}>
        The passwords don't match.
        </Text>
      }

      <Button 
      style= {styles.signUpButton}
      icon = 'pencil-plus'
      color = {'white'}
      labelStyle= {{fontSize: 22}}
        
      onPress = {navigateProfile}
      >
      
      SIGN UP 
      </Button>
      <Text 
      style= {styles.alreadyHaveAccountText}>
      Already have an account?  
     
      </Text> 
      <Button
      style= {styles.login}
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
    justifyContent: 'center',
  // alignItems:'center'
  }, 

  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  changeMode: { 
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
    width: 300, 
    justifyContent: 'center',
    alignItems: 'center',
    
  }, 

  signUpButton: {
    marginTop: 15,
    marginBottom:-5,
    width: 250,
    backgroundColor: 'teal'
  },
  alreadyHaveAccountText:{ 
    marginTop: 10
  },
  login: { 
    marginBottom: 20
  },
  captionText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#8F9BB3",
    
  },
})
