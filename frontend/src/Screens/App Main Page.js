import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import {  Button, Divider, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context'

export default function LoginScreen ({ navigation }) {
  
    const themeContext = React.useContext(ThemeContext);

    return (
        <SafeAreaView style={styles.container}>
          <TopNavigation title='Login' alignment='center' accessoryLeft={BackAction}/>
          <Divider/>
          <Layout style={styles.ChangeMode}>
            <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>CHANGE MODE</Button>
          </Layout>
          </SafeAreaView>
          )
    }
    