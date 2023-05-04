import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'


import GlobalStyle from '../config/GlobalStyle'
import { Feather } from '@expo/vector-icons'

export default function ProfileNavBar({ user }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Feather name="search" size={20} color={'white'}/>
            </TouchableOpacity>
            <Text style={styles.text}>{user.userName}</Text>
            <TouchableOpacity>
                <Feather name="menu" size={24} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    text: {
        fontSize: 16,
        color: 'white',
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});