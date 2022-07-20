import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroVRSceneNavigator,
  Viro360Image
} from '@viro-community/react-viro';
import { createIconSetFromFontello } from 'react-native-vector-icons';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const MainScene = ( props ) => {
    // console.log('HERE', props.sceneNavigator.viroAppProps.resource_path) 
    const handleClick =() => {
      props.sceneNavigator.push({scene: this})
      }
    const handleLoadEnd = () => {
        console.log("Yeet")
    }
  
    //   // set initial state
    //   this.state = {
    //     runShowTitleAnimation : false,
    //   }
  
    //   // bind `this` to functions
    //   this._onBackgroundPhotoLoadEnd = this._onBackgroundPhotoLoadEnd.bind(this);
    //   this._onTitleClicked = this._onTitleClicked.bind(this);
    // }
  
    /**
     * Renders a scene with a 360 Photo background that contains a single WeWork ViroImage. This
     * image will be faded/scaled in with the "showTitleAnimation" when the scene first appears. Clicking on
     * the WeWork ViroImage will launch the user into the next scene (WestLakeTowers).
     */
    return (
      <ViroScene style={styles.container}>
        <Viro360Image source={{uri: props.sceneNavigator.viroAppProps.resource_path}}
         rotation={[0, 60, 0]}
          format="RGBA8"
          // stereoMode="LeftRight"
          onLoadEnd={handleLoadEnd} 
          />
          <ViroText
            fontSize={10}
                      text="PhotoSphere"
                      width={0.5}
                      height={0.5}
                      position={[0, 0, -2]}
                      textAlign="center"
                      textAlignVertical="center"
                      color="#ffffff"
          />
  
        {/* <ViroImage
          position={[0, 0, -5]} source={weworkImage} scale={[.1, .1, .1]}
          opacity={0.0} onClick={this._onTitleClicked}
          animation={{
            name : "showTitleAnimation",
            run : this.state.runShowTitleAnimation,
            loop : false,
          }} /> */}
      </ViroScene>
    );
};

const VRScene = ( {route, navigation} ) => {
    console.log("route", route.params)
    const goBack = () => {
        navigation.navigate("LoggedIn")
    }

    return (
      <ViroVRSceneNavigator
        initialScene={{
          scene: MainScene,
        }}
        viroAppProps={{resource_path: route.params.url}}
        onExitViro={goBack}
      />
    );
  };

export default VRScene