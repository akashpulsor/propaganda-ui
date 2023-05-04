import React from 'react'
import { View, Text, FlatList,StyleSheet } from 'react-native'
import ProfilePostListItem from './ProfilePostListItem'
import GlobalStyle from '../config/GlobalStyle'

export default function ProfilePostList({ posts }) {
    console.log("POST LIST" + JSON.stringify(posts));
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={3}
                removeClippedSubviews
                nestedScrollEnabled
                data={posts}
                keyExtractor={(item) => item.postId}
                renderItem={({ item }) => (<ProfilePostListItem item={item} />)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000000',
        
      }

})