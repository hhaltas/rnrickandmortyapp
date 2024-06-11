import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiCharacter, ApiUrl} from '../../utils/static';

// Async Action Creator (Thunk)
export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async characterId => {
    const response = await axios.get(ApiUrl + ApiCharacter + '/' + characterId);
    console.log('fetchCharacters', response.data);
    return response.data;
  },
);
