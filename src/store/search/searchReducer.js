import {createSlice} from '@reduxjs/toolkit';
import {searchCharacters, searchEpisodes} from './searchActions';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    characters: [],
    episodes: [],
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchCharacters.pending, state => {
        state.loading = true;
      })
      .addCase(searchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
        state.error = '';
      })
      .addCase(searchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchEpisodes.pending, state => {
        state.loading = true;
      })
      .addCase(searchEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes = action.payload.results;
        state.error = '';
      })
      .addCase(searchEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
