import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import GlobalStyle from '../config/GlobalStyle';
import { style } from '@mui/system';

const SpalshScreen = ({navigation}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.spalshFlex}>
      
        <View style={styles.header}>
        <Text style={[styles.title, {
                color: 'white',marginBottom:50
            }]}>PROPAGANDA</Text>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/images/hypotize.gif')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: 'black',
                borderColor:'white',
                borderWidth:1,
                borderRadius:5
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.background,marginLeft:10
            }]}>Democracy Dies in DayLight</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login Screen') }>
                <LinearGradient
                        colors={['#FFA07A', '#FF6347']}
                        style={styles.signIn}
                    >
                  <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="white"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
  );
};

export default SpalshScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  spalshFlex: {
      ...GlobalStyle.rootFlex
  },
  header: {
      ...GlobalStyle.rootChild,
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'white',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30,
      marginBottom:20,
      marginRight:20
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});