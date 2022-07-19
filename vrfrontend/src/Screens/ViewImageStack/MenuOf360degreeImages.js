import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Image } from 'react-native';
import { ApplicationProvider, IconRegistry, Divider, Layout, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../../theme-context';
import { Avatar, Title, Caption, Text, TouchableRipple, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import Share from 'react-native-share'
import { useSelector, useDispatch } from 'react-redux';
import { selectSphere } from '../../Redux/actions';

const MenuOf360degreeImagesScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const spheres = useSelector(state => state.spheres)

  const navigateVR = (sphereId) => {
    const path = spheres[sphereId].path
    navigation.navigate("VR", {
      url: path
    })
  }

  return (
      <SafeAreaView style= {styles.container}>

        <ScrollView style = {styles.topPadding}>

          <View style = {styles.topBox}> 
          

            <View style = {styles.titleWrapper}> 

            <Text style = {styles.textTitle}> 
            View your 360 degrees images </Text> 
            <Icon 
            name = 'panorama-sphere'
            size = {22}
            /> 
            <Icon 
            name = 'image'
            size = {22}
            /> 

            </View>
          </View>
          {spheres.map(sphere => {
            const dt = new Date(sphere.dateUploaded)
            const dateStr = `${dt.getHours()}:${dt.getMinutes()}, ${dt.getDate()}/${dt.getMonth()}/${dt.getFullYear()}`
            return (
            <View style = {styles.listOfImages}>

              <View style = {styles.imageWrapper}> 
                <Image 
                  source = {{uri: sphere.thumbnail}}
                  style = {styles.image}/>

                <Text style = {styles.imageLabel}> {sphere.caption} </Text>

                <Text style = {styles.dateOfImage}> {dateStr} (Date Uploaded) </Text>
                <Text style = {styles.dateOfImage}> Type: {sphere.type} </Text>
              </View> 

              

              <Button 
              icon = 'panorama-variant'
              labelStyle = {{fontSize: 12}}
              onPress ={() => {
                selectSphere(sphere.id)
                navigateVR(sphere.id)
              }}> Click to view 
              </Button>
            </View>
          )})}
        </ScrollView>
      </SafeAreaView> 

  )

}

export default MenuOf360degreeImagesScreen; 
  
  
  
const styles = StyleSheet.create({
container: {
marginTop: 10,
flex: 1,

//justifyContent: 'center',
// alignItems:'center'
}, 

topPadding:{ 
  paddingTop: 10, 
  paddingBottom: 20,

},

topBox:{
  height: 50, 
  backgroundColor: 'teal',
  flex: 1,
  marginTop: 5,

},

titleWrapper:{
  marginTop: 0,
  flexDirection: 'row', 
  justifyContent: 'center',
  marginTop: 12,
},

textTitle:{
  fontWeight: 'bold',
  fontSize: 15,
  color: 'white',


},

listOfImages:{
  flexDirection: 'row', 
  alignItems: 'center', 
  flex: 1,
  marginTop: 30,
  justifyContent: 'space-between',
  marginBottom: 20,
  

},

imageWrapper:{
  marginLeft: 15, 
  
  
  
},

buttonWrapper:{
  marginRight:5
  
  
},

image:{
  width: 150, 
  height: 80,
  borderRadius: 10,

},

imageLabel:{
  fontSize: 12, 
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 10,
  
   
},

dateOfImage:{
  fontSize: 12, 
  fontWeight: 'bold',
  fontStyle: 'italic',
   
},


changeMode: { 
flex: 0, 
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'center' ,
},


})