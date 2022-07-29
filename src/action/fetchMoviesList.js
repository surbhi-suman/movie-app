// import axios from 'axios';
// import { baseURL } from "../constants/Application";
import { getMoviesListLoading, getMoviesListSuccess, getMoviesListFailure } from "../reducer/fetchMoviesListReducer";
import MovieList from '../constants/1.json';
import MovieList2 from '../constants/2.json';

export function fetchMoviesList(pageNumer) {
    return dispatch => {
      dispatch(getMoviesListLoading());
      try{
        const MovieLists = pageNumer === 2 ? MovieList2 : MovieList
        dispatch(getMoviesListSuccess(MovieLists.MovieList));
      }catch{
        dispatch(getMoviesListFailure());
      }
    }
  }


  // Due to CORS Error and response not getting from API, so could not execute this action call based on url

  // export function fetchMoviesList(pageNumer) { 
  //   return function(dispatch) {
  //     dispatch(getMoviesListLoading());
  //     return axios.get(`${baseURL}${pageNumer}.json`)
  //       .then(({ data }) => {
  //       dispatch(getMoviesListSuccess(data));
  //     }).catch((error)=>{
  //       console.error(error);
  //       dispatch(getMoviesListFailure());
  //     })
  //   };
  // }
