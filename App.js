
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyle from './config/GlobalStyle';
import AppNav from './navigation/AppNav';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './store/store';





const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchInterval: false, staleTime: Infinity } }
})

export default function App() {
  return (

        <Provider  store={store}>
            <QueryClientProvider client={queryClient}>
                <AppNav/>
            </QueryClientProvider>
            
        </Provider>
        
  );
  
}


const styles = StyleSheet.create({
  container: {
      ...GlobalStyle.rootFlex
  },
});
