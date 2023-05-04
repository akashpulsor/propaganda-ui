import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppStack from '../routes/AppStack';
import AuthStack from '../routes/AuthStack';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';
import {  useDispatch, useSelector } from 'react-redux';
import { getCurrentUserData, Init,userAuthStateListener } from '../store/actions/actions';
import {Models} from 'appwrite';
import {store} from '../store/store';

const Stack = createStackNavigator();

export default function AppNav()  {
    
    const currentUserObj = useSelector( state => state.Reducers.currentUser )
    const token = useSelector( state => state.Reducers.token )

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthStateListener());
        setLoading(false);

    }, [])

     

    if (loading) {
        return (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large" color={'#f54'} />
          </View>
        )
      }

    return (
            <NavigationContainer>
                {currentUserObj != null ? <AppStack/> : <AuthStack/>}
            </NavigationContainer>
    );

}