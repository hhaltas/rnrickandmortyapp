import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiEpisode, ApiUrl} from '../../utils/static';

// Async Action Creator (Thunk)
export const fetchEpisodeDetail = createAsyncThunk(
  'episodesDetail/fetchEpisodeDetail',
  async id => {
    const response = await axios.get(ApiUrl + ApiEpisode + '/' + id);

    return response.data;
  },
);
