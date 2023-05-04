import api from './api';
import AsyncStorage from "@react-native-async-storage/async-storage";





  export const getProfilesByEmail = async () => {
    AsyncStorage.getItem('token'). then(response =>{
        let headers= {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Authorization" : "Bearer " + response.accessToken
        }
        return api.get('/api/users/get_user_by_id/'+response.id,headers);
    });
  
  }

  export const getUserProfileByIdWhileLogin = async () => {

    return AsyncStorage.getItem('token'). then(response =>{
        let token = JSON.parse(response);
        let headers= {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Authorization" : "Bearer " + token.accessToken
        }
        return api.get('/api/users/get_user_by_id/'+token.id,headers);
    });
  }

  export const getProfilesByUsername = async (data) => {
    AsyncStorage.getItem('token'). then(response =>{
        let token = JSON.parse(response);
        let headers= {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Authorization" : "Bearer " + token.accessToken
        }
        return api.get('/api/users/username?name='+data,headers);
    });
  
  }

  export const getAuthHeaders = () => {
    AsyncStorage.getItem('token'). then(response =>{
        let token = JSON.parse(response);
        let headers= {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Authorization" : "Bearer " + token.accessToken
        }
        return headers;
    });
  }



  export const getUserById = (id) => new Promise((resolve, reject) => {
    AsyncStorage.getItem('token'). then(response =>{
        let token = JSON.parse(response);
        let headers= {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Authorization" : "Bearer " + token.accessToken
        }
        return api.get('/api/users/get_user_by_id/'+id,headers).then( res =>{
                resolve(res.data)
            }    
        ).catch(() => reject());
    });
  })

  export const getPostsByUserId = (id) => new Promise((resolve, reject) => {
    AsyncStorage.getItem('token'). then(response =>{
        let token = JSON.parse(response);
        let headers= {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Authorization" : "Bearer " + token.accessToken
        }
        return api.get('/api/users/post/'+id,headers).then( res =>{
                console.log(res.data);
                resolve("MEDIA DATA IS" + res.data);
            }    
        ).catch(reject());
    });
  })


export const getIsFollowing = (userId, otherUserId) => new Promise((resolve, reject) => {

})


export const changeFollowState = ({ otherUserId, isFollowing }) => new Promise((resolve, reject) => {
    if (isFollowing) {

    } else {

    }
})

