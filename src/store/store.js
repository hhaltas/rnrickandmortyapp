import {configureStore} from '@reduxjs/toolkit';
//Reducer List
import episodeReducer from '../store/episodes/episodeReducer';
import characterReducer from './characters/characterReducer';
import episodeDetailReducer from './episodeDetail/episodeDetailReducer';
import favoriteReducer from './favorite/favoriteReducer';
import searchReducer from './search/searchReducer';

const store = configureStore({
  reducer: {
    episodes: episodeReducer,
    characters: characterReducer,
    episodesDetails: episodeDetailReducer,
    favorite: favoriteReducer,
    search: searchReducer,
  },
});

export default store;
