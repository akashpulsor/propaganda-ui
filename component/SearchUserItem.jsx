import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native'
import GlobalStyle from '../config/GlobalStyle';

export default function SearchUserItem({ item }) {
    const navigation = useNavigation()
    console.log(item);
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('profileOther', { initialUserId: item.id })}>
            <Text style={styles.text}>{item.username}</Text>
            <Image style={styles.image} source={{ uri: item.profileImage }} />
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
      ...GlobalStyle.rootFlex,
     
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    textInput: {
        margin: 10,
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 4,
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: 'white',
    },
    image: {
        backgroundColor: 'gray',
        height: 40,
        width: 40,
        borderRadius: 20,
    }

})