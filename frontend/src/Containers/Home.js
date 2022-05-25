import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export default function HomeScreen ({ navigation }) {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const navigateAuth = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='PhotoSphere' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Button onPress={navigateAuth}>Sign In</Button>
      </Layout>
    </SafeAreaView>
  );
};