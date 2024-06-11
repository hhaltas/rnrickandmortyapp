import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';
import MainPage from './router';
import {ModalPortal} from 'react-native-modals';
const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
      <ModalPortal />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
