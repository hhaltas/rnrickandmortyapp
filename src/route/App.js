import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';
import MainPage from './router';
const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
