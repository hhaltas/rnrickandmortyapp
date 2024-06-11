import {createSlice} from '@reduxjs/toolkit';
import {fetchEpisodeDetail} from './episodeDetailActions';

const episodeDetailSlice = createSlice({
  name: 'episodesDetail',
  initialState: {
    loading: false,
    episodesDetails: '',
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEpisodeDetail.pending, state => {
        state.loading = true;
      })
      .addCase(fetchEpisodeDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.episodesDetails = action.payload;
        state.error = '';
      })
      .addCase(fetchEpisodeDetail.rejected, (state, action) => {
        state.loading = false;
        state.episodesDetails = [];
        state.error = action.error.message;
      });
  },
});

export default episodeDetailSlice.reducer;
