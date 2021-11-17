import axios from 'axios';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width  

const ChangePasswordScreen = ( { navigation } ) => {

const [passField, setPassField] = useState('')


const handleSend = async () => {

 
  const result = await axios({
    method: 'post',
    url: 'http://10.0.2.2:5000/api/change-password',
    headers:{
      "Content-Type" : "application/json"
    },
    data: JSON.stringify({
      newpassword: passField,
      token: await AsyncStorage.getItem('token')
    })
  }).then(res => res.data)
    if (result.status === 'ok') {
      // everythign went fine
      console.log('Got the token:', result.status)
      
      alert('Success')
      navigation.navigate('Login')
    } else {
      alert(result.error)
    }

}
    return (
        <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TextInput 
          style={styles.input}
          onChangeText={text => setPassField(text)}
          />
          <TouchableOpacity
          onPress={handleSend}
          >
            <View style={styles.touchable}>
            <Text style={{color:'white'}}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#acadac',
      width: width,
      height: height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      backgroundColor: '#ffffff',
      width: width * 0.6,
      height: width * 0.08,
      marginTop: 6,
    },
    touchable:{
      width: width * 0.6,
      height: width * 0.06,
      marginTop: 6,
      backgroundColor: '#1c50ed',
      justifyContent: 'center',
      alignItems: 'center',
    }
});


export default ChangePasswordScreen