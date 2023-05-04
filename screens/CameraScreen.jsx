import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import GlobalStyle from '../config/GlobalStyle';


function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text>Camera Screen</Text>
    </View>
  );
}

export default CameraScreen;


const styles = StyleSheet.create({
    container: {
        ...GlobalStyle.rootFlex
      }

})