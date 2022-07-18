import 'react-native-gesture-handler'
import { SafeAreaView, StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text , Button} from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { default as mapping } from './mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
//import { AppNavigator } from './src/Navigation/Navigator';
import Spinner from 'react-native-loading-spinner-overlay';

import {LoggedOutNavigator, LoggedInNavigator} from './src/Navigation/Navigator'

import { ThemeContext } from './theme-context';
import React from 'react';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);



export default function App() {

  const [theme, setTheme] = React.useState('light');
  const [spinner, setSpinner] = React.useState(false);
  
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider 
          {...eva}
          theme={eva[theme]}
          customMapping={mapping}>

          <Spinner
            visible={spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          <LoggedOutNavigator /> 
          
        
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

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});