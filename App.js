
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyle from './config/GlobalStyle';
import AppNav from './navigation/AppNav';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (

  
          <AppNav/>
         
  );
}

const styles = StyleSheet.create({
  container: {
      ...GlobalStyle.rootFlex
  },
});
