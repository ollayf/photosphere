import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Divider, TextInput, StyleSheet, Button, Layout, TopNavigation, TopNavigationAction } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons' 
import  Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ThemeContext } from '../../../theme-context'
import { useSelector, useDispatcher } from 'react-redux'
import { useState } from 'react'
import { editProfile } from '../../utils/auth'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
  );
  
const EditProfileScreen = () => {
  const userId = useSelector(state => state.creds.userId)
  const [usernameEdit, usernameEditFn] = useState("")
  const [emailEdit, emailEditFn] = useState("")
  const [firstnameEdit, firstnameEditFn] = useState("")
  const [lastnameEdit, lastnameEditFn] = useState("")

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );
    return ( 
      
        <View style = {styles.container}>      
            <View style ={{margin: 20}}> 
                <View style = { {alignItems: 'center'}}>
                        <View style = {styles.image}>
                            <ImageBackground 
                            style = {styles.image}
                            source ={require('../../Components/Avatar.png')}
                             size = {100}>
                             </ImageBackground>
                        </View>

                    <Text style = {styles.name}> 
                     Edit Profile
                     </Text>
                </View>
                </View> 

                

                <View style = {styles.inputWrapper}>
                    <FontAwesome name = 'user-o' size = {20} />
                    <TextInput 
                        placeholder='Username'
                        placeholderTextColor= '#666666'
                        style = {styles.input}
                        autoCorrect = {false}
                        onChangeText={text => emailEditFn(text)}
                        >

                        </TextInput>                        
                </View> 
                <View style = {styles.inputWrapper}>
                    <FontAwesome name = 'envelope-o' size = {20} />
                    <TextInput 
                        placeholder='Email'
                        placeholderTextColor= '#666666'
                        style = {styles.input}
                        autoCorrect = {false}
                        onChangeText={text => usernameEditFn(text)}
                        >

                        </TextInput>                        
                </View> 
                <View style = {styles.inputWrapper}>
                    <FontAwesome name = 'user-o' size = {20} />
                    <TextInput 
                        placeholder='First Name'
                        placeholderTextColor= '#666666'
                        style = {styles.input}
                        autoCorrect = {false}
                        onChangeText={text => firstnameEditFn(text)}
                        >

                        </TextInput>                        
                </View> 
                <View style = {styles.inputWrapper}>
                    <FontAwesome name = 'user-o' size = {20} />
                    <TextInput 
                        placeholder='Last Name'
                        placeholderTextColor= '#666666'
                        style = {styles.input}
                        autoCorrect = {false}
                        onChangeText={text => lastnameEditFn(text)}
                        >

                        </TextInput>                        
                </View> 

                <TouchableOpacity style = {styles.submitButton}
                    onPress = {editProfile(userId, usernameEdit, emailEdit, firstnameEdit, lastnameEdit)}> 
                <Text 
                style={styles.submitText}>
                Submit
                </Text>
                </TouchableOpacity>
        </View>
    )
}

export default EditProfileScreen; 

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30, 
    }, 
    image: { 
        height: 100, 
        width: 100,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraIcon: { 
        opacity: 0.7, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderWidth: 1, 
        borderColor: '#fff', 
        borderRadius: 10, 

    },

    name: { 
        marginTop: 20, 
        fontSize: 18, 
        fontWeight: 'bold'
    }, 

    inputWrapper: { 
        flexDirection: 'row', 
        marginTop: 10, 
        marginBottom: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginLeft: 15,
       
    },
    input: {
        width: 500,
        flex: 1,
        paddingLeft: 15, 
        color: '#05373a',
        
    },
    submitButton:{ 
        marginTop: 10,
        padding: 15, 
        borderRadius: 10, 
        backgroundColor: 'teal',
        width: 100,
    },
    submitText: {
        fontSize: 20,

    },
    })