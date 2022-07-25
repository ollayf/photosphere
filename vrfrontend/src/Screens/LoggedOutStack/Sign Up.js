import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { ApplicationProvider, IconRegistry, Divider, Layout, Text, Input, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../../theme-context';
import Smallerlogo from '../../Components/Smallerlogo'
import Passwordinput from '../../Components/Passwordinput';
import * as eva from '@eva-design/eva';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-paper';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { signup, usernameExists, emailExists } from '../../utils/auth';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);


export default function SignUpScreen ({ navigation }) {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2]= useState('')
  const [pw_match, setPwMatch] = useState(true)
  const [nameState, setNameState] = useState(0)

  const [emailTaken, setEmailTaken] = useState(false)
  
  
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
    console.log(username)
    if (!(username && firstname && lastname && password1 && password2 && email)) {
      setNameState(2)
      return
    }

    if (password1 != password2) {
      setPwMatch(false)
      return
    }
    emailExists(email)
    .then((status) => {
      if (status != 404) {
        setEmailTaken(true)
        return false
      }
      usernameExists(username)
    .then((status) => {
      if (status == 200) {
        console.log("Same username")
        setNameState(1)
        return false
      } else {
        console.log("Logging in")
        signup(email, username, password1, firstname, firstname)
        .then((res) => {
          if (res.status == 201) {
            return res.json()
          } else {
            alert("Something went wrong with creation of account")
            return false
          }
        }).then((data) => {
          if (!data) {
            return
          }
          const creds = {
            user: {
              id: data.userId,
              email: email,
              username: username,
              firstname: firstname,
              lastname: lastname,
              spheres_count: 0
            }
          }
          dispatch({
            type: "loadProfile",
            payload: creds
          })
          navigation.navigate("LoggedIn")

        })
      }
    })
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

      <ScrollView>

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
          value = {username} 
          onChangeText= { text => setUsername(text)}
          > 
          </Input> 
          <Input 
          style={styles.input}
          placeholder= 'First Name'
          autoCapitalize='none'
          value = {firstname} 
          onChangeText= { text => setFirstname(text)}
          > 
          </Input> 

          <Input 
          style={styles.input}
          placeholder= 'Last Name'
          autoCapitalize='none'
          value = {lastname} 
          onChangeText= { text => setLastname(text)}
          > 
          </Input> 
          {emailTaken && <Text style={styles.captionText}>
          Email Taken
          </Text>}
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
      </ScrollView>

    

     
    </SafeAreaView>
  
  );
};


const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
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
