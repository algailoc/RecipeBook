import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {MenuProvider} from 'react-native-popup-menu';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store';
import AppLoader from './src/components/AppLoader';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar backgroundColor="#B5231A" />
        <MenuProvider>
          <AppLoader />
        </MenuProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
