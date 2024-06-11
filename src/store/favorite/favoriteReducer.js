import {createSlice} from '@reduxjs/toolkit';
import {addFavorite, removeFavorite} from './favoriteActions';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addFavorite, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFavorite, (state, action) => {
        state.favorites = state.favorites.filter(
          episode => episode.id !== action.payload.id,
        );
      });
  },
});

export default favoriteSlice.reducer;
