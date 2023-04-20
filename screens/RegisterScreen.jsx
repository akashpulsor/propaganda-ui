import React, {useState} from 'react';
import {

  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import GlobalStyle from '../config/GlobalStyle';





const RegisterScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
});
const { signIn } = React.useContext(AuthContext);
const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false
        });
    }
}

const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val
    });
}

const handleConfirmPasswordChange = (val) => {
    setData({
        ...data,
        confirm_password: val
    });
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
}

const registerHandle = (data) => {

  //      const foundUser = Users.filter( item => {
    //        return userName == item.username && password == item.password;
     //   } );
        if(data.password != data.confirm_password){
          Alert.alert('Password and confirm password mismatched', [
            {text: 'Okay'}
          ]);
          return;
        }
        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
  
        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( data.password.length == 0 || data.password.length == 0 ) {
          Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
              {text: 'Okay'}
          ]);
          return;
      }
        signIn(foundUser);
    }
  return (
    <View style={styles.container}>
  <View style={styles.header}>
      <Text style={styles.text_header}>Register Now!</Text>
  </View>
  <Animatable.View 
      animation="fadeInUpBig"
      style={styles.footer}
  >
      <ScrollView>
      <Text style={styles.text_footer}>Username</Text>
      <View style={styles.action}>
          <FontAwesome 
              name="user-o"
              color="#05375a"
              size={20}
          />
          <TextInput 
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? 
          <Animatable.View
              animation="bounceIn"
          >
              <Feather 
                  name="check-circle"
                  color="green"
                  size={20}
              />
          </Animatable.View>
          : null}
      </View>

      <Text style={[styles.text_footer, {
          marginTop: 35
      }]}>Password</Text>
      <View style={styles.action}>
          <Feather 
              name="lock"
              color="#05375a"
              size={20}
          />
          <TextInput 
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
              onPress={updateSecureTextEntry}
          >
              {data.secureTextEntry ? 
              <Feather 
                  name="eye-off"
                  color="grey"
                  size={20}
              />
              :
              <Feather 
                  name="eye"
                  color="grey"
                  size={20}
              />
              }
          </TouchableOpacity>
      </View>

      <Text style={[styles.text_footer, {
          marginTop: 35
      }]}>Confirm Password</Text>
      <View style={styles.action}>
          <Feather 
              name="lock"
              color="#05375a"
              size={20}
          />
          <TextInput 
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity
              onPress={updateConfirmSecureTextEntry}
          >
              {data.secureTextEntry ? 
              <Feather 
                  name="eye-off"
                  color="grey"
                  size={20}
              />
              :
              <Feather 
                  name="eye"
                  color="grey"
                  size={20}
              />
              }
          </TouchableOpacity>
      </View>
      <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
              By signing up you agree to our
          </Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
          <Text style={styles.color_textPrivate}>{" "}and</Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
      </View>
      <View style={styles.button}>
          <TouchableOpacity
              style={styles.signIn}
              onPress={() => {}}
          >
          <LinearGradient
              colors={['#FFA07A', '#FF6347']}
              style={styles.signIn}
          >
              <Text style={[styles.textSign, {
                  color:'#fff'
              }]}>Sign Up</Text>
          </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => navigation.navigate('Login Screen')}
              style={[styles.signIn, {
                  borderColor: '#FF6347',
                  borderWidth: 1,
                  marginTop: 15
              }]}
          >
              <Text style={[styles.textSign, {
                  color: '#FF6347'
              }]}>Sign In</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
  </Animatable.View>
</View>
  );
};

export default RegisterScreen;


const styles = StyleSheet.create({
  container: {
      ...GlobalStyle.rootFlex
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  }
});
