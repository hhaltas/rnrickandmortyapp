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
import SearchScreen from '../pages/search/SearchScreen';

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

  const SearchStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Character" component={CharacterScreen} />
        <Stack.Screen name="Episode" component={EpisodeScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{backgroundColor: '#388A3D'}}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Favorite') {
              iconName = 'favorite';
            } else if (route.name === 'Search') {
              iconName = 'search';
            }
            return <MaterialIcons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favorite" component={FavoriesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default routerIndex;

const styles = StyleSheet.create({});
