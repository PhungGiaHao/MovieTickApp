import React from 'react';
import AppNavigator from './src/navigators/App';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import store from './src/redux/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
