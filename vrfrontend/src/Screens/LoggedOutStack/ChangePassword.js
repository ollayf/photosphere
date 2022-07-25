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
import { signup, usernameExists } from '../../utils/auth';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { checkPasswordBE, changePasswordBE } from '../../utils/auth';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);


export default function ChangePasswordScreen ({ navigation }) {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.creds.userId)
  const [old_password, setOldPassword] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2]= useState('')
  const [PWState, setPWState] = useState(0)
  
  
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
    if (!(old_password && password1 && password2)) {
      setPWState(2)
      return
    }

    if (password1 != password2) {
      return
    }

    if (old_password == password1) {
      setPWState(1)
      return
    }
    checkPasswordBE(userId, old_password)
    .then(
      (status) => {
        if (status == 200) {
          changePasswordBE(userId, password1)
          .then((status) => {
            if (status != 200) {
              alert("Something went wrong with changing passwords")
              return
            } else {
              alert("Password changed successfully")
              navigation.navigate("ViewProfile")
            }
          })
        } else {
          setPWState(3)
        }
      }
    )
  }

  function PWComment () {
    switch (PWState) {
      case 0:
        return (<></>);
      case 1:
        return (<Text style={styles.captionText}>
        Same Password.
        </Text>);
      case 2:
        return (<Text style={styles.captionText}>
        Some of the fields are empty
        </Text>);
      case 3:
        return (<Text style={styles.captionText}>
        Wrong Password
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
            Change Password {'\n'}

            </Text>

          <PWComment/>

          
          <Input 
          style={styles.input}
          placeholder= 'Old Password'
          autoCapitalize='none'
          //keyboardType= '' 
          value = {old_password} 
          onChangeText= { text => setOldPassword(text)}
          secureTextEntry
          >
          </Input>

          <Input 
          style={styles.input}
          placeholder= 'New Password'
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
          
          {password1 === password2 ? <></> :
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
          
          CONFIRM 
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
