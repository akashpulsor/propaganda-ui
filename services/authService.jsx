import axios from "axios";

import { BASE_URL } from "../config/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const register = async (user) => {
    let data =JSON.stringify(user)
    console.log("POST DATA IS" + data);
  return axios.post(BASE_URL + "/api/auth/signup", 
    user
  );
};

export const login = async (data) => {
    let temp =JSON.stringify(data)
    console.log("POST DATA IS" + temp);
    let headers= {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "User-Agent":"PostmanRuntime/7.28.3"
    };  
  return axios
    .post(BASE_URL + "/api/auth/login",data, {"headers" : headers} );
};

export const logout = () => {
    AsyncStorage.removeItem("user");
};

export const authHeader = () =>{
    const user = JSON.parse(AsyncStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
};
