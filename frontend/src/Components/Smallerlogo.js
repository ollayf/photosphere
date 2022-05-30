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
        width: 200, 
        height: 200, 
        marginBottom: 1, 
    }

})

export default Logo;