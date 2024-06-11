import {createSlice} from '@reduxjs/toolkit';
import {addFavorite, removeFavorite} from './favoriteActions';

const MAX_FAVORITES = 10;

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addFavorite, (state, action) => {
        if (state.favorites.length < MAX_FAVORITES) {
          state.favorites.push(action.payload);
          state.error = '';
        } else {
          state.error = 'Maximum number of favorite episodes is 10.';
        }
      })
      .addCase(removeFavorite, (state, action) => {
        state.favorites = state.favorites.filter(
          episode => episode.id !== action.payload.id,
        );
      });
  },
});

export default favoriteSlice.reducer;
