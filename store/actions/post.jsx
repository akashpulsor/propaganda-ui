import { saveMediaToStorage } from '../../services/random'
import uuid from 'uuid-random'
import { CURRENT_USER_POSTS_UPDATE } from '../../config/constants'
import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client
    .setEndpoint('http://13.233.150.112/v1')
    .setProject('6442c923ef67bba9ec2c');


export const account = new Account(client)

export const databases = new Databases(client, '6442c9bb274b82f6a110')

/**
 * 
 * @param {
 * } description 
 * @param {*} video 
 * @param {*} thumbnail 
 * @returns 
 *     let storagePostId = uuid()
    let allSavePromises = Promise.all([
        saveMediaToStorage(video, `post/${firebase.auth().currentUser.uid}/${storagePostId}/video`),
        saveMediaToStorage(thumbnail, `post/${firebase.auth().currentUser.uid}/${storagePostId}/thumbnail`)
    ])

    allSavePromises
        .then((media) => {
            firebase.firestore()
                .collection('post')
                .add({
                    creator: firebase.auth().currentUser.uid,
                    media,
                    description,
                    likesCount: 0,
                    commentsCount: 0,
                    creation: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(() => resolve())
                .catch(() => reject())
        })
        .catch(() => reject())
 */
export const createPost = (description, video, thumbnail) => dispatch => new Promise((resolve, reject) => {
    console.log("Create post called");
})


export const getPostsByUser = (id) => dispatch => new Promise((resolve, reject) => {
        console.log('get post by user')
})


export const getFeed= () => dispatch => new Promise((resolve, reject) => {
       

})