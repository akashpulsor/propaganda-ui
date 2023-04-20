import { StyleSheet, Text, View,Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    rootFlex: {
            flex: 1,
            width: width,
            height: height,
            backgroundColor: '#000000',

    },
    rootChild: {

            flex: 1,
            width: width,
            height: height/2,

    },

});