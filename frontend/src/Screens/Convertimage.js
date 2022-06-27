import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import {  Button, Divider, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const ConvertImage = (props) => {
    return (
        <SafeAreaView>
            style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}
            <Text>Convert Image Screen </Text>
        </SafeAreaView> 
    )
}

export default ConvertImageScreen; 

