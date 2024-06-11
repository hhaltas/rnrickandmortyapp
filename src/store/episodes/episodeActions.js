import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiEpisode, ApiUrl} from '../../utils/static';

// Async Action Creator (Thunk)
export const fetchEpisodes = createAsyncThunk(
  'episodes/fetchEpisodes',
  async () => {
    const response = await axios.get(ApiUrl + ApiEpisode);
    return response.data.results;
  },
);
