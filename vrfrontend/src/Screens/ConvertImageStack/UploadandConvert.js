import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Image } from 'react-native';
import { ApplicationProvider, IconRegistry, Divider, Layout, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {AppLoading} from 'expo';
import { ThemeContext } from '../../../theme-context';
import { Avatar, Title, Caption, Text, TouchableRipple, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import Share from 'react-native-share'
import DocumentPicker from 'react-native-document-picker'
import { useSelector } from 'react-redux';

const  UploadandConvertScreen = ({navigation}) => {
  const [ singleFile, setSingleFile ] = useState(null)
  const [ caption , setCaption ] = useState("")
  const userId = useSelector(state => state.creds.userId)

  const uploadImage = async () => {
    if (singleFile) {
      const fileToUpload = singleFile[0];
      console.log(singleFile)
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('caption', caption)
      data.append('file_attachment', fileToUpload),
      data.append('userId', userId)
      fetch(
        'http://34.87.107.21:8000/api/uploadImage/',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      )
      .then( (res) => {
        if (res.status == 200) {
          console.log("Here")
          alert("Image Uploaded")
        } else {
          alert("There was an issue trying to upload this. Please try again later")
        }
      })
    } else {
      alert('Please Select File first')
    }
  }

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.images],
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null)
      if (DocumentPicker.isCancel(err)) {
        alert('Cancelled Selecting image')
      } else{
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }
  return (
      <SafeAreaView style= {styles.container}>

        <ScrollView style = {styles.topPadding}>

          <View style = {styles.topBox}> 
          

            <View style = {styles.titleWrapper}> 

            <Text style = {styles.textTitle}> 
            Upload your 360 Image</Text> 
            <Icon 
            name = 'swap-horizontal'
            size = {22}
            /> 
            <Icon 
            name = 'image'
            size = {22}
            /> 

            </View>
          </View>

          <View style = {styles.componentWrapper}>
          {singleFile ? 
            <Text style = {styles.headerOfInput}>Image Chosen: {singleFile[0].name} {'\n'}</Text> : 
            <Text style = {styles.headerOfInput}>No Image Chosen {'\n'}</Text>}
            
            <View style = {styles.headerWrapper}> 
              <Text style = {styles.headerOfInput}>Caption</Text>
              <Icon name = 'label'
                size = {22}
              />

              </View>
                <Input 
                style = {styles.input}
                onChangeText={text=>setCaption(text)}
                placeholder = 'Eg. Location'>
                </Input>
                
            
            


          </View>

          {/* <View style = {styles.componentWrapper}>

            <View style = {styles.headerWrapper}> 
              <Text style = {styles.headerOfInput}>Date</Text>
              <Icon name = 'calendar-range'
                size = {22}
              />

              </View>
                <Input 
                style = {styles.input}
                placeholder = 'When was this taken?'/>               
                
               
                
            
          </View> */}

          <View style = {styles.uploadButtonWrapper}>
            <Button 
             onPress= {selectFile}
             style = {styles.uploadButton}
             icon = 'upload' 
             size = {40}>
             Select Image      
             </Button>

          
          </View>

          <Button 
             onPress= {uploadImage}
             style = {styles.convertButton}
             icon = 'swap-horizontal-circle'
             labelStyle = {{fontSize: 20}}
          > 
          UPLOAD    
             </Button>

          
          
        

        </ScrollView>

       


      </SafeAreaView> 

  )

}

export default UploadandConvertScreen; 
  
  
  
          




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

headerWrapper:{
  flexDirection: 'row',

},

headerOfInput:{
  marginLeft: 10,
  marginRight: 5

},

componentWrapper: { 
  marginTop: 20,

},

input: {
  marginLeft: 10,
  width: 400,

},

uploadButton: {
  

},

convertButton:{ 
  marginTop: 30,
  
},


uploadButtonWrapper:{
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 20,


},


changeMode: { 
flex: 0, 
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'center' ,
},


})