import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroVRSceneNavigator
} from '@viro-community/react-viro';

var backgroundImage = require('./westlake_towers.jpg')
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

export default () => {
  return (
    <ViroVRSceneNavigator
      initialScene={{
        scene: MainScene,
      }}
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
