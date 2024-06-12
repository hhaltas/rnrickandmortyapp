import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiCharacter, ApiEpisode, ApiUrl} from '../../utils/static';

export const searchCharacters = createAsyncThunk(
  'search/searchCharacters',
  async query => {
    const response = await axios.get(ApiUrl + ApiCharacter + '/?name=' + query);
    return response.data;
  },
);

export const searchEpisodes = createAsyncThunk(
  'search/searchEpisodes',
  async query => {
    const response = await axios.get(ApiUrl + ApiEpisode + '/?name=' + query);
    return response.data;
  },
);
