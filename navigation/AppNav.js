import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppStack from '../routes/AppStack';
import AuthStack from '../routes/AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../contexts/AuthContext';


const Stack = createStackNavigator();

export default function AppNav()  {
    const initialLoginState = {
        userName: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch( action.type ) {
          case 'RETRIEVE_TOKEN': 
            return {
              ...prevState,
              userToken: action.token,
            };
          case 'LOGIN': 
            return {
              ...prevState,
              userName: action.id,
              userToken: action.token,
            };
          case 'LOGOUT': 
            return {
              ...prevState,
              userName: null,
              userToken: null,
            };
          case 'REGISTER': 
            return {
              ...prevState,
              userName: action.id,
              userToken: action.token,
            };
        }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
    const authContext = React.useMemo(() => ({
        signIn: async(foundUser) => {
          // setUserToken('fgkj');
          // setIsLoading(false);
          const userToken = String(foundUser[0].userToken);
          const userName = foundUser[0].username;
          
          try {
            await AsyncStorage.setItem('userToken', userToken);
          } catch(e) {
            console.log(e);
          }
          // console.log('user token: ', userToken);
          dispatch({ type: 'LOGIN', id: userName, token: userToken });
        },
        signOut: async() => {
          // setUserToken(null);
          // setIsLoading(false);
          try {
            await AsyncStorage.removeItem('userToken');
          } catch(e) {
            console.log(e);
          }
          dispatch({ type: 'LOGOUT' });
        },
        signUp: (User) => {
            const userName = String(User[0].name);
            const password = String(User[1].password);
            AsyncStorage.setItem({
                    'userName':userName,
                    'password':password,
                    'userToken':'dfewdfewdfwe'
                } 
            );
        }
      }), []);

      useEffect(() => {
        setTimeout(async() => {
          let userToken;
          userToken = null;
          try {
            userToken = await AsyncStorage.getItem('userToken');
          } catch(e) {
            console.log(e);
          }
          dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
      }, []);

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.userToken !== null ? <AppStack/> : <AuthStack/>}
            </NavigationContainer>
        </AuthContext.Provider>
    );


}