import {configureStore} from '@reduxjs/toolkit';
//Reducer List
import episodeReducer from '../store/episodes/episodeReducer';
import characterReducer from './characters/characterReducer';
import episodeDetailReducer from './episodeDetail/episodeDetailReducer';

const store = configureStore({
  reducer: {
    episodes: episodeReducer,
    characters: characterReducer,
    episodesDetails: episodeDetailReducer,
  },
});

export default store;
