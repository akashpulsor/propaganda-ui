import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STATE_CHANGE } from '../../config/constants'
import {ID} from "appwrite";
import {v4 as uuidv4} from 'uuid'
import {Client, Account, Databases} from 'appwrite'
import { register, login } from "../../services/authService";

import {getUserProfileByIdWhileLogin} from "../../services/UserService";


export const init = () => {
  {
    type: USER_STATE_CHANGE,
    currentUser = null,
    loaded = false
  }


}


export  const Login = (loginRequest, EXCEPTION) => dispatch => new Promise((resolve, reject) => {
  loginCallBack(loginRequest,EXCEPTION);

  getUserProfileByIdWhileLogin().then(response => {
    AsyncStorage.setItem('user',JSON.stringify(getUserData(response.data)));
  }).catch(error => {
    let errorMessage=error.message;
    let currentUser = null;
    let loaded = null;
    let token = null;
    console.log(errorMessage);
    dispatch(
      {
        type: EXCEPTION,
        payload: {currentUser,loaded,token, errorMessage}
      }
    )
 });
  dispatch(userAuthStateListener());
})



function loginCallBack(loginRequest, EXCEPTION) {
  login(loginRequest).then(res => {
    let token = getTokenData(res.data);
    return AsyncStorage.setItem('token',JSON.stringify(token));
  }) .catch(error => {
    let errorMessage=error.message;
    let currentUser = null;
    let loaded = null;
    let token = null;
    console.log(errorMessage);
    dispatch(
      {
        type: EXCEPTION,
        payload: {currentUser,loaded,token, errorMessage}
      }
    )
 });
}

function getTokenData(data){
    console.log(data.userInfoResponse.id);
    return {
      accessToken : data.accessToken,
      refreshToken: data.refreshToken,
      type: data.type,
      id: data.userInfoResponse.id
    }
}

function getUserData(data) {
  return {
    username : data.userName,
    email: data.email,
    id: data.id,
    profileImage: data.profileImage,
    followerCount: data.followerCount
  }
}


export const Register = (user,EXCEPTION) => dispatch => new Promise((resolve, reject) => {
  let currentUser =null
  let token = null;
  let loaded = false;
  let errorMessage=null;
  let data ={'username': user.username,
      'password': user.password,
      'phone' : user.phone,
      'email' : user.email
  };
  register(data) .then(response => {
    AsyncStorage.setItem('user',JSON.stringify(getUserData(response.data)));
    let loginRequest ={
      'username': user.username,
      'password': user.password,
    };
    loginCallBack(loginRequest, EXCEPTION)
  })
 .catch(error => {
   errorMessage = error.messsage;
    dispatch(
      {
        type: EXCEPTION,
        payload: {currentUser,loaded,token, errorMessage}
      }
    )
 });
 dispatch(userAuthStateListener());
})

async function  getMyObject (key){
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    jsonValue != null ? JSON.parse(jsonValue) : null;
    return jsonValue
  } catch(e) {
    // read error
  }

  console.log('Done.')
}
export  const  userAuthStateListener = () => dispatch => {
  console.log("auth state listener caught");

  let p1 = getMyObject('user').then(user => {return user;}); 
  let p2 = getMyObject('token').then(token => {return token});
   
  Promise.all([p1,p2]).
  then( res =>{
      let currentUser = res[0];
      let token = res[1];
      let loaded = currentUser === null ? false : true;
      let errorMessage = null;
      dispatch(
        {
          type: USER_STATE_CHANGE,
          payload: {currentUser,loaded,token,errorMessage}
        }
      )
    }
  )
}






export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: USER_STATE_CHANGE
    })
  }
}



export const getCurrentUserData = () => dispatch => {
  appwrite.account.get()
  .then((response) => {
    console.log('User data:', response);
   
    if (response) {
      return dispatch({
          type: USER_STATE_CHANGE,
          currentUser: response,
          loaded: true
      })
  }
  })
  .catch((error) => {
    console.error('Error fetching user data:', error);
  });
}


