/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomeScreen from './src/screens/home';
import RegisterScreen from './src/screens/register';
import LoginScreen from './src/screens/login';


const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Register"
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;