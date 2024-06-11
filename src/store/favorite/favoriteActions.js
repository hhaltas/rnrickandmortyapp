import {createAction} from '@reduxjs/toolkit';

// Action Creators for Favorites
export const addFavorite = createAction('favorite/addFavorite');
export const removeFavorite = createAction('favorite/removeFavorite');
