import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Action Creators for Favorites
export const addFavorite = createAction('favorite/addFavorite');
export const removeFavorite = createAction('favorite/removeFavorite');
export const loadFavoritesFromStorage = createAsyncThunk(
  'favorite/loadFavoritesFromStorage',
  async () => {
    try {
      const favoritesJson = await AsyncStorage.getItem('favorites');
      if (favoritesJson) {
        return JSON.parse(favoritesJson);
      }
      return [];
    } catch (error) {
      console.error('Error loading favorites from storage:', error);
      return [];
    }
  },
);

export const saveFavoritesToStorage = createAsyncThunk(
  'favorite/saveFavoritesToStorage',
  async (favorites, {dispatch}) => {
    try {
      const favoritesJson = JSON.stringify(favorites);
      await AsyncStorage.setItem('favorites', favoritesJson);
    } catch (error) {
      console.error('Error saving favorites to storage:', error);
    }
  },
);
