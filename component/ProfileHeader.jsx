 import { useNavigation } from '@react-navigation/native'
 import {   useSelector } from 'react-redux';
import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'
import { useFollowing } from '../hooks/useFollowing'
import { useFollowingMutation } from '../hooks/useFollowingMutation'
import GlobalStyle from '../config/GlobalStyle'

/**
 * Renders the header of the user profile and
 * handles all of the actions within it like follow, unfollow and
 * routing to the user settings.
 * 
 * @param {Object} props 
 * @param {Object} props.user information of the user to display 
 * @returns 
 */
 export default function ProfileHeader({ user }) {

    const navigation = useNavigation()
    const currentUserObj = JSON.parse(useSelector( state => state.Reducers.currentUser ))

    const isFollowing = useFollowing(currentUserObj.id, user.id).data
    const isFollowingMutation = useFollowingMutation()
    const renderFollowButton = () => {
        if (isFollowing) {
            return (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={GlobalStyle.grayOutlinedButton}
                        onPress={() => navigation.navigate('chatSingle', { contactId: user.id })}
                    >
                        <Text style={GlobalStyle.grayOutlinedButtonText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={GlobalStyle.grayOutlinedIconButton}
                        onPress={() => isFollowingMutation.mutate({ otherUserId: user.id, isFollowing })}

                    >
                        <Feather name="user-check" size={20} />
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TouchableOpacity
                    style={GlobalStyle.filledButton}
                    onPress={() => isFollowingMutation.mutate({ otherUserId: user.id, isFollowing })}
                >
                    <Text style={GlobalStyle.filledButtonText}>Follow</Text>
                </TouchableOpacity>
            )

        }
    }
    return (
        <View style={styles.container}>
            <Avatar.Icon size={80} icon={"account"} />
            <Text style={styles.emailText}>{user.email}</Text>
            <View style={styles.counterContainer}>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Following</Text>
                </View>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Followers</Text>
                </View>
                <View style={styles.counterItemContainer}>
                    <Text style={styles.counterNumberText}>0</Text>
                    <Text style={styles.counterLabelText}>Likes</Text>
                </View>
            </View>
            {currentUserObj.id === user.id ?
                <TouchableOpacity
                    style={GlobalStyle.grayOutlinedButton}
                    onPress={() => navigation.navigate('editProfile')}
                >
                    <Text style={GlobalStyle.grayOutlinedButtonText}>Edit Profile</Text>
                </TouchableOpacity>
                :
                renderFollowButton()
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 65,
        borderBottomWidth: 1,
        borderColor: 'white',
        backgroundColor: '#000000',
    },
    counterContainer: {
        paddingBottom: 20,
        flexDirection: 'row',

    },
    counterItemContainer: {
        flex: 1,
        alignItems: 'center',
        padding:30
    },
    emailText: {
        padding: 20,
        color:'white'
    },
    counterNumberText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    counterLabelText: {
        color: 'white',
        fontSize: 11
    }
});