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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//Screen List
import Home from '../pages/home/HomeScreen';
import EpisodeScreen from '../pages/episode/EpisodeScreen';
import CharacterScreen from '../pages/character/CharacterScreen';
import FavoriesScreen from '../pages/favories/FavoriesScreen';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

const routerIndex = () => {
  const HomeStack = () => {
    return (
      <Stack.Navigator initialRouteName="Rick and Morty">
        <Stack.Screen name="Rick and Morty" component={Home} />
        <Stack.Screen name="Episode" component={EpisodeScreen} />
        <Stack.Screen name="Character" component={CharacterScreen} />
      </Stack.Navigator>
    );
  };

  const FavoriesStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favories" component={FavoriesScreen} />
        <Stack.Screen name="Character" component={CharacterScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{backgroundColor: '#388A3D'}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'favorite' : 'favorite-border';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Favorite" component={FavoriesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default routerIndex;

const styles = StyleSheet.create({});
