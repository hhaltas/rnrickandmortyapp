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
import Favories from '../pages/favories/FavoriesScreen';
import {fetchEpisodes} from '../store/episodes/episodeActions';
import {useDispatch, useSelector} from 'react-redux';
import EpisodeScreen from '../pages/episode/EpisodeScreen';
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const routerIndex = () => {
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="index" component={Home} />
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
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favories') {
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
        <Tab.Screen name="Favories" component={Favories} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default routerIndex;

const styles = StyleSheet.create({});
