/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import AppNavigator from './src/Navigation/AppNavigation';



const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       <AppNavigator></AppNavigator>
      </SafeAreaView>
    </Fragment>
  );
};


export default App;
