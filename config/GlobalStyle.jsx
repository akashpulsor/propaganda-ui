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
    grayOutlinedButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    grayOutlinedIconButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10
    },
    filledButton: {
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 50,
        backgroundColor: '#ff4040'
    },
    filledButtonText: {
        color: 'white',
        fontWeight: '700'
    },
    grayOutlinedButtonText: {
        color: 'white',
        fontWeight: '700'
    },
});