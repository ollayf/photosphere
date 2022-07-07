import { SafeAreaView, StyleSheet, View } from 'react-native';
import { AppNavigator } from './src/Navigation/Navigator';
import React from 'react';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function HomeScreen ({ navigation }) {

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