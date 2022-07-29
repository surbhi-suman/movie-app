import { combineReducers } from 'redux'

import fetchMoviesListReducer from '../reducer/fetchMoviesListReducer';

const rootReducer = combineReducers({
  moviesList: fetchMoviesListReducer,
})

export default rootReducer;