import {createSlice} from '@reduxjs/toolkit';
import {fetchEpisodes} from './episodeActions';

const episodeSlice = createSlice({
  name: 'episodes',
  initialState: {
    loading: false,
    episodes: [],
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEpisodes.pending, state => {
        state.loading = true;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes = action.payload;
        state.error = '';
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.episodes = [];
        state.error = action.error.message;
      });
  },
});

export default episodeSlice.reducer;
