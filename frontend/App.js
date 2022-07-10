import 'react-native-gesture-handler'
import { SafeAreaView, StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text , Button} from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { default as mapping } from './mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
//import { AppNavigator } from './src/Navigation/Navigator';

import {LoggedOutNavigator, LoggedInNavigator} from '../frontend/src/Navigation/Navigator'

import { useFonts } from 'expo-font';
import { ThemeContext } from './theme-context';
import React from 'react';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default function App() {
  const [loaded] = useFonts({
    "OpenSans-Regular": require('./assets/OpenSans-Regular.ttf')
  })

  const [theme, setTheme] = React.useState('light');
  
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  
  if (!loaded) {
    return null
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider 
          {...eva}
          theme={eva[theme]}
          customMapping={mapping}>

          <LoggedInNavigator /> 
        
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  )
};

// DEFAULT TEMPLATE 

// export default function App() {
//   return (
//     <ApplicationProvider {...eva} theme={eva.light}>
//       <SafeAreaView>
//         <Text>Open up App.js to start working on your app!</Text>
//         <StatusBar style="auto" />
//       </SafeAreaView>
//     </ApplicationProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });