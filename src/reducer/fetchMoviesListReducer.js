import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  moviesList: [],
  searchedMovieName: '',
  selectedMovie: {},
  isMovieSelected: false
}

// A slice for moviesList with our three reducers
const fetchMoviesListReducer = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    getMoviesListLoading: state => {
      state.loading = true
    },
    getMoviesListSuccess: (state, { payload }) => {
      state.moviesList = payload
      state.loading = false
      state.hasErrors = false
    },
    getMoviesListFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
    getSearchedMovieName: (state, { payload }) =>{
        state.searchedMovieName = payload
    },
    getSelectedMovie: (state, { payload }) =>{
        state.selectedMovie = payload
        state.isMovieSelected = true
    },
    clearSelectedMovie: state => {
      state.selectedMovie = {}
      state.isMovieSelected = false
    }
  },
})

// Actions generated from the movie createSlice Reducer file
export const { 
   getMoviesListLoading,
   getMoviesListSuccess,
   getMoviesListFailure, 
   getSearchedMovieName, 
   getSelectedMovie, 
   clearSelectedMovie } = fetchMoviesListReducer.actions;

// The reducer
export default fetchMoviesListReducer.reducer;