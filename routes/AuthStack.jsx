import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import  SpalshScreen from '../screens/SpalshScreen';



const Stack = createStackNavigator();

export default function AuthStack() {
    console.log("Called Auth Stack");
  return (
    
    <Stack.Navigator  options={{headerShown:false}} >
      <Stack.Screen name="Spalsh Screen" component={SpalshScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login Screen" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Register Screen" component={RegisterScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};


