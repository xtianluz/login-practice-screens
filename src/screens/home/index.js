import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import EncryptedStorage from 'react-native-encrypted-storage';

const HomeScreen = ( { navigation } ) => {

    const handleSend = async () => {
        await EncryptedStorage.removeItem('token')
        navigation.navigate('Login')
    }
    return (
        <View>
            <Text>Welcome to React Native</Text>
            <TouchableOpacity
          onPress={handleSend}
          >
            <View style={{backgroundColor:'blue'}}>
            <Text style={{color:'white'}}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
