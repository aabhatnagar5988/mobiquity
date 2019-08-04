/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from './src/Navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/Store';

const App = () => {
  return (
    <Provider store={store}>   
       <AppNavigator></AppNavigator>
   </Provider>
  );
};


export default App;
