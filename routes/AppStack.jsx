import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FollowScreen from '../screens/FollowScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FeedScreen from '../screens/FeedScreen';


const Stack = createStackNavigator();

export default function AppStack() {
    console.log("Called App Stack");
  return (
    <Stack.Navigator options={{headerShown:false}} initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Follow" component={FollowScreen} options={{headerShown:false}}/>
        <Stack.Screen name="profileOther" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="userPosts" component={FeedScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};


