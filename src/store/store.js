import {configureStore} from '@reduxjs/toolkit';
import episodeReducer from '../store/episodes/episodeReducer';

const store = configureStore({
  reducer: {
    episodes: episodeReducer,
  },
});

export default store;
