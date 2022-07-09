import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import Logo from '../../Components/Logo'
import { Button } from 'react-native-paper';

export default function HomeScreen ({ navigation }) {

  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  const navigateSignUp = () => {
    navigation.navigate('Sign Up');
  };

  return (
    <View style={styles.container}>
      
      <Layout style={styles.layout}>
      <Logo></Logo>
        <Button 
        style= {styles.button} 
        icon = 'login'
        color = {'white'}
        labelStyle= {{fontSize: 25}}
        onPress={navigateLogin}>
        LOGIN
        
        </Button>

        <Button 
        style= {styles.button}  
        icon = 'account-plus'
        color = {'white'}
        labelStyle= {{fontSize: 25}}
        onPress={navigateSignUp}>
        
        SIGN UP 
        
        </Button>
      </Layout>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
 },
 layout:{
   flex: 1, 
   justifyContent: 'center', 
   alignItems: 'center',
 },
  button:{
    width: '80%',
    backgroundColor: 'teal',
    marginBottom: 20,
  }, 
 /* text: {
    fontWeight: 'bold', 
    fontSize: 20, 
    lineHeight: 26, 
  },*/ 
  
  }) 