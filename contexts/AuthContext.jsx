import React, {createContext, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);


    const login = () => {
        setUserToken('afasafa');
        setIsLoading(true);
        AsyncStorage.setItem('userToken', 'afasafa');
    }

    const logout = () => {
        setUserToken(null);
        setIsLoading(false);
        AsyncStorage.removeItem('userToken');
    }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.
                getItem('userToken');
            setIsLoading(false);
        }
        catch(e) {
            console.log(`isLogged in error ${e}`);
        }
    }

    useEffect(() =>{
        isLoggedIn();
    },[]);

    return (
        <AuthContext.Provider value={{isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}