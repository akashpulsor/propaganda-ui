import { saveMediaToStorage } from './random'

import {ID} from "appwrite";
import {v4 as uuidv4} from 'uuid'
import {Client, Account, Databases} from 'appwrite'
import axios from 'axios';

import {BASE_URL} from '../config/constants'
const client = new Client();

client
    .setEndpoint('http://13.233.150.112/v1')
    .setProject('6442c923ef67bba9ec2c');


export const account = new Account(client)

export const databases = new Databases(client, '6442c9bb274b82f6a110')

export const saveUserProfileImage = (image) => new Promise((resolve, reject) => {
    saveMediaToStorage(image, `profileImage/${firebase.auth().currentUser.uid}`).then((res) => {

    })
})

export const saveUserField = (field, value) => new Promise((resolve, reject) => {
    let obj = {};
    obj[field] = value

})


export const queryUsersByEmail = (email) => new Promise((resolve, reject) => {
    if (email === '') {
        resolve([])
    }
    else {
        resolve(['nirmala@gmail.com','akash123@gmail.com'])
    }
})


export const getUserById = (id) => new Promise((resolve, reject) => {

})



export const getIsFollowing = (userId, otherUserId) => new Promise((resolve, reject) => {

})


export const changeFollowState = ({ otherUserId, isFollowing }) => new Promise((resolve, reject) => {
    if (isFollowing) {

    } else {

    }
})



export function register(userRequest) {
      return axios
      .post(
        BASE_URL+'/create', userRequest
      );
  }


function getPromise(URL) {
    let promise = new Promise(function (resolve, reject) {
      let req = new XMLHttpRequest();
      req.open("GET", URL);
      req.onload = function () {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject("There is an Error!");
        }
      };
      req.send();
    });
    return promise;
}