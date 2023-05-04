import React, { createContext, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FeedScreen from '../screens/FeedScreen'
import ProfileScreen from '../screens/ProfileScreen'

const { Screen, Navigator } = createMaterialTopTabNavigator()
import { View, Text,StyleSheet } from 'react-native';
import GlobalStyle from '../config/GlobalStyle';

export const CurrentUserProfileItemInViewContext = createContext(null)

const FeedNavigation = () => {
    const [currentUserProfileItemInView, setCurrentUserProfileItemInView] = useState(null)
    return (
        <CurrentUserProfileItemInViewContext.Provider value={currentUserProfileItemInView}>
            <Navigator
                initialRouteName="feedList"
                tabBar={() => <></>}>
               
                <Screen
                    name="feedList"
                    component={FeedScreen}
                    initialParams={{ setCurrentUserProfileItemInView, profile: false }} />
                <Screen
                    name="feedProfile"
                    component={ProfileScreen}
                    initialParams={{ initialUserId: null }}
                />
        </Navigator>
    </CurrentUserProfileItemInViewContext.Provider>

    )
}

export default FeedNavigation


const styles = StyleSheet.create({
    container: {
        ...GlobalStyle.rootFlex,
        backgroundColor:'white'
      }

})