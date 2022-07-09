import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Image } from 'react-native';
import { ApplicationProvider, IconRegistry, Divider, Layout, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../theme-context';
import { Avatar, Title, Caption, Text, TouchableRipple, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import Share from 'react-native-share'

const ViewImageScreen = ({navigation}) => {
  
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

          <View style = {styles.listOfImages}>

            <View style = {styles.imageWrapper}> 
              <Image 
                source = {require('../Components/Avatar.png')}
                style = {styles.image}/>

               <Text style = {styles.imageLabel}> Image Label (eg. Bali Uluwatu temple) </Text>

               <Text style = {styles.dateOfImage}> 13/07/2022 (Date converted) </Text>
            </View> 

            

            <Button 
           
            icon = 'panorama-variant'
            labelStyle = {{fontSize: 12}}
            onPress ={()=>{}}> Click to view 
            </Button>

           
            
            

          </View>

          <View style = {styles.listOfImages}>

            <View style = {styles.imageWrapper}> 
              <Image 
                source = {require('../Components/Avatar.png')}
                style = {styles.image}/>

               <Text style = {styles.imageLabel}> Sentosa  </Text>

               <Text style = {styles.dateOfImage}> 13/07/2022  </Text>
            </View> 

            <Button 
            
            icon = 'panorama-variant'
            labelStyle = {{fontSize: 12}}
            onPress ={()=>{}}> Click to view 
            </Button>
            
            

          </View>

          <View style = {styles.listOfImages}>

            <View style = {styles.imageWrapper}> 
              <Image 
                source = {require('../Components/Avatar.png')}
                style = {styles.image}/>

               <Text style = {styles.imageLabel}> Mount Fuji </Text>

               <Text style = {styles.dateOfImage}> 13/07/2022 (Date converted) </Text>
            </View> 

            <View> 
             <Button 
              
              icon = 'panorama-variant'
              labelStyle = {{fontSize: 12}}
              onPress ={()=>{}}> Click to view 
            </Button>
            </View>
            
            

          </View>

          <View style = {styles.listOfImages}>

            <View style = {styles.imageWrapper}> 
              <Image 
                source = {require('../Components/Avatar.png')}
                style = {styles.image}/>

               <Text style = {styles.imageLabel}> Image Label (eg. Bali Uluwatu temple) </Text>

               <Text style = {styles.dateOfImage}> 13/07/2022 (Date converted) </Text>
            </View> 

            <Button 
            
            icon = 'panorama-variant'
            labelStyle = {{fontSize: 12}}
            onPress ={()=>{}}> Click to view 
            </Button>
            
            

          </View>

          
        

        </ScrollView>

       


      </SafeAreaView> 

  )

}

export default ViewImageScreen; 
  
  
  
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
  justifyContent: 'space-between'
  

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