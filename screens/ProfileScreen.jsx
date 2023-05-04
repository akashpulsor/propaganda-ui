import GlobalStyle from '../config/GlobalStyle';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView ,StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import api from '../services/api';
import ProfileNavBar from '../component/ProfileNavBar'
import ProfileHeader from '../component/ProfileHeader'
import ProfilePostList from '../component/ProfilePostList'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CurrentUserProfileItemInViewContext } from '../navigation/FeedNavigation'
import { useUser } from '../hooks/useUser'

import {getPostsByUserId} from '../services/UserService';


function ProfileScreen({ route }) {
  console.log(JSON.stringify(route));
  const token = useSelector( state => state.Reducers.token )
 
  const initialUserId  = route.params.initialUserId;
  const [userPosts, setUserPosts] = useState([]);
  let providerUserId = null
  if (CurrentUserProfileItemInViewContext != null) {
      providerUserId = useContext(CurrentUserProfileItemInViewContext)
  }
  const user = useUser(initialUserId ? initialUserId : providerUserId).data;
  const getAuthHeaders = () =>{
    return {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Authorization" : "Bearer " + token.accessToken
    }
}
  useEffect(() => {
      if (user === undefined) {
          return;
      }
      let headers = getAuthHeaders();
      api.get('/api/users/post/'+user.id,headers).
      then(res => {console.log(res.data);
        setUserPosts(res.data.mediaData
          )}).catch(error =>{
        let errorMessage = error.message;
        console.log(errorMessage);
      });
  }, [user])

  if (user === undefined) {
      return <></>
  }
  return (
      <SafeAreaView style={styles.container}>
          <ProfileNavBar user={user} />
          <ScrollView>
              <ProfileHeader user={user} />
              <ProfilePostList posts={userPosts} />
          </ScrollView>
      </SafeAreaView>
  )
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        ...GlobalStyle.rootFlex,
        paddingTop:24
      }

})