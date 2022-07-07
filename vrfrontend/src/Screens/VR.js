import React, {useState} from 'react';
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroVRSceneNavigator
} from '@viro-community/react-viro';

// var backgroundImage = require('./westlake_towers.jpg')
var MainScene = require('./MainScene')

// const HelloWorldSceneVR = () => {
//   const [text, setText] = useState('Initializing AR...');

//   function onInitialized(state, reason) {
//     console.log('guncelleme', state, reason);
//     }
//   }

//   return (
//     <ViroVRScene onTrackingUpdated={onInitialized}>
//     </ViroVRScene>
//   );
// };

export default ({ navigation }) => {
  const goBack = () => {
    navigation.navigate('Home')
  }
  return (
      <ViroVRSceneNavigator
        initialScene={{
          scene: MainScene,
          passProps: {navigation}
        }} 
        onExitViro={goBack}
      />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
