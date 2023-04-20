import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FollowScreen from '../screens/FollowScreen';
import HomeScreen from '../screens/HomeScreen';



const Stack = createStackNavigator();

export default function AppStack() {
    console.log("Called App Stack");
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Follow" component={FollowScreen} />
    </Stack.Navigator>
  );
};


