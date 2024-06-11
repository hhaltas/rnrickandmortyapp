import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiEpisode, ApiUrl} from '../../utils/static';

export const fetchEpisodes = createAsyncThunk(
  'episode/fetchEpisodes',
  async page => {
    const response = await axios.get(ApiUrl + ApiEpisode + '?page=' + page);
    return response.data;
  },
);
