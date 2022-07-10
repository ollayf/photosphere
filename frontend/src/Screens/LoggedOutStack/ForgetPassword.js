import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Divider, Icon, Layout, Text, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ThemeContext } from '../../../theme-context';
import Smallerlogo from '../../Components/Smallerlogo'
import { Button } from 'react-native-paper';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );
  
  export default function ForwardPasswordScreen ({ navigation }) {
  
    const themeContext = React.useContext(ThemeContext);
  
    const navigateBack = () => {
      navigation.goBack();
    };
  
    const BackAction = () => (
      <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );
    
    /*const navigateSendEmail = () => {
      navigation.navigate('');
    };*/

    return (
    <SafeAreaView style={styles.container}>
      
  
      <Layout style={styles.header}>
        <Smallerlogo>
        </Smallerlogo>
      
  
      </Layout>
  
  
      <Layout style={styles.header}>
        <Text 
          category= 'h2'>
          Restore your account
  
        </Text>

        <Text 
        style= {styles.label}
        category={'label'}
        > Instructions to reset your password will be sent to this email 
        </Text> 

        <Input 
          style={styles.input}
          placeholder= 'Email'
          keyboardType= 'email-address'
          size='large'
        > 
        </Input> 

          <Button 
          style= {styles.RequestEmail}
          icon = 'email'
          color = {'white'}
          labelStyle= {{fontSize: 22}}
          onPress = { () => {}}
      >
REQUEST EMAIL

</Button>
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

label:{
  marginBottom: 20
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
RequestEmail: {
  marginTop: 20,
  marginBottom: 200,
  width: 250,
  backgroundColor: 'teal'
},

})
  