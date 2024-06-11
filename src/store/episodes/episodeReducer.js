import {createSlice} from '@reduxjs/toolkit';
import {fetchEpisodes} from './episodeActions';

const episodeSlice = createSlice({
  name: 'episodes',
  initialState: {
    loading: false,
    episodes: [],
    page: 1,
    error: '',
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEpisodes.pending, state => {
        state.loading = true;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes = [...state.episodes, ...action.payload.results];
        state.page += 1;
        state.hasNextPage = action.payload.info.next !== null;
        state.error = '';
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default episodeSlice.reducer;
