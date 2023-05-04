
import { View, Text,StyleSheet,Dimensions, FlatList } from 'react-native';
import GlobalStyle from '../config/GlobalStyle';
import React, { useEffect, useRef, useState } from 'react'
import useMaterialNavBarHeight from '../hooks/useMaterialNavBarHeight'
import PostSingle from '../component/PostSingle'
import { getFeed, getPostsByUserId } from '../services/posts'

function FeedScreen({route}) {
    const { setCurrentUserProfileItemInView, creator, profile } = route.params
    const [posts, setPosts] = useState([])
    const mediaRefs = useRef([])

    useEffect(() => {
        if (profile) {
            getPostsByUserId(creator).then(setPosts)
        } else {
            getFeed().then(setPosts)
        }
    }, [])


    /**
     * Called any time a new post is shown when a user scrolls
     * the FlatList, when this happens we should start playing 
     * the post that is viewable and stop all the others
     */
    const onViewableItemsChanged = useRef(({ changed }) => {
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key]
            if (cell) {
                if (element.isViewable) {
                    if (!profile) {
                        setCurrentUserProfileItemInView(element.item.creator)
                    }
                    cell.play()
                } else {
                    cell.stop()
                }
            }

        });
    })

    const feedItemHeight = Dimensions.get('window').height - useMaterialNavBarHeight(profile);
    /**
     * renders the item shown in the FlatList
     * 
     * @param {Object} item object of the post 
     * @param {Integer} index position of the post in the FlatList 
     * @returns 
     */
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ height: feedItemHeight, backgroundColor: 'black' }}>
                <PostSingle item={item} ref={PostSingleRef => (mediaRefs.current[item.id] = PostSingleRef)} />
            </View>
        )
    }


    return (
        <View style={styles.container}>
              <FlatList
                data={posts}
                windowSize={4}
                initialNumToRender={0}
                maxToRenderPerBatch={2}
                removeClippedSubviews
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 0
                }}
                renderItem={renderItem}
                pagingEnabled
                keyExtractor={item => item.id}
                decelerationRate={'normal'}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}

export default FeedScreen;


const styles = StyleSheet.create({
    container: {
        ...GlobalStyle.rootFlex
      }

})