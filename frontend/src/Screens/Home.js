import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import Logo from '../Components/Logo'

export default function HomeScreen ({ navigation }) {

  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  const navigateSignUp = () => {
    navigation.navigate('Sign Up');
  };

  return (
    <View style={styles.container}>
      <TopNavigation title='PhotoSphere' alignment='center'/>
      <Divider/>

      <Layout style={styles.layout}>
      <Logo></Logo>
        <Button 
        style= {styles.button} 
        appearance='filled'  
        size='large'
        onPress={navigateLogin}>
        LOGIN
        
        </Button>

        <Button 
        style= {styles.button} 
        size='large'
        appearance = 'filled'
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
    marginVertical: 10, 
    paddingVertical: 30, 
    backgroundColor: 'teal'
  }, 
 /* text: {
    fontWeight: 'bold', 
    fontSize: 20, 
    lineHeight: 26, 
  },*/ 
  
  }) 