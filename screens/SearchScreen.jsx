import GlobalStyle from '../config/GlobalStyle';
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, FlatList,StyleSheet, TouchableNativeFeedbackBase } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchUserItem from '../component/SearchUserItem';
import {   useDispatch, useSelector } from 'react-redux';
import api from '../services/api';

import {SEARCH_API_EXCEPTION} from '../config/constants';


function SearchScreen() {
  const token = useSelector( state => state.Reducers.token )
  const [textInput, setTextInput] = useState('')
  const [searchUsers, setSearchUsers] = useState([])
  const [loadSearch, setLoadSearch] = useState([false])

  console.log(token);
  const getAuthHeaders = () =>{
      return {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Authorization" : "Bearer " + token.accessToken
      }
  }
  const dispatch = useDispatch();
  useEffect(() => {
      if(textInput){
        console.log(textInput)
        let headers = getAuthHeaders();
        api.get('/api/users/username?name='+textInput,headers).
        then(res => {setSearchUsers(res.data)}).catch(error =>{
          let errorMessage = error.message;
          dispatch({
            type: SEARCH_API_EXCEPTION,
            payload: {errorMessage}
          })
        });

        setLoadSearch(true);
        
      }
      else{
        setLoadSearch(false);
      }

  }, [textInput])

  console.log(searchUsers);

  return (
        <SafeAreaView style={styles.container}>
            <TextInput
                onChangeText={setTextInput}
                style={styles.textInput}
                placeholder={'Search'}
            />
     
      {!loadSearch ? (
        <></>
       ) : (
        <FlatList
        data={searchUsers}
        renderItem={({ item }) => <SearchUserItem item={item} />}
        keyExtractor={(item) => item.id}

    />
        )}  
         
         
            
            
          
        </SafeAreaView>
  );
}

export default SearchScreen;


const styles = StyleSheet.create({
      container: {
        ...GlobalStyle.rootFlex
      },
      textInput: {
          margin: 10,
          backgroundColor: 'lightgray',
          padding: 5,
          borderRadius: 4,
      }

})