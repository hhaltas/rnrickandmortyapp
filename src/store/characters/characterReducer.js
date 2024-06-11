import {createSlice} from '@reduxjs/toolkit';
import {fetchCharacters} from './characterActions';

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    loading: false,
    characters: '',
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
        state.error = '';
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.characters = [];
        state.error = action.error.message;
      });
  },
});

export default characterSlice.reducer;
