import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeIndex from '../pages/home';

const Stack = createNativeStackNavigator();

const routerIndex = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeIndex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routerIndex;

const styles = StyleSheet.create({});
