import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import GlobalStyle from '../config/GlobalStyle';


function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
    </View>
  );
}

export default ChatScreen;


const styles = StyleSheet.create({
    container: {
        ...GlobalStyle.rootFlex
      }

})