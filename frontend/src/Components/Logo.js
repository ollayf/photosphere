import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const Logo = () => {
    return (
        <View style = {styles.container}>
            <Image
            style={styles.logo}
            source={require('./PhotosphereLogo.png')} 
       >

        </Image>
        </View> 
    )
}


const styles = StyleSheet.create({ 
    logo: { 
        width: 300, 
        height: 300, 
        marginBottom: 1, 
    }

})

export default Logo;