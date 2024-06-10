import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

// Async Action Creator (Thunk)
export const fetchEpisodes = createAsyncThunk(
  'episodes/fetchEpisodes',
  async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/episode');
    return response.data.results;
  },
);
