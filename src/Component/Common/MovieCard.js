import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getSelectedMovie } from '../../reducer/fetchMoviesListReducer';
import { moviesListSelector } from '../../selectors/moviesListSelector';

const MovieCard = () =>{

const dispatch = useDispatch();
const naviagte = useNavigate();

const {loading, hasErrors, moviesList, searchedMovieName } = useSelector(moviesListSelector);

const filteredMovieList = searchedMovieName === '' ? moviesList: 
    moviesList.filter(movie => Object.values(movie.Title).join('').toLowerCase().includes(searchedMovieName.toLowerCase()));

const onMoviePosterClick = (event) =>{
    const movieId = event.currentTarget.getAttribute('data-attr');
    const selectedMoviePoster = filteredMovieList.find(movie=> movie.IMDBID === movieId);
    dispatch(getSelectedMovie(selectedMoviePoster));
    naviagte("/about", { replace: true });
}
const renderMovies = () => {
    
    if (loading) return <p>Please wait !! Loading Movies List....</p>
    if (hasErrors) return <p>Cannot display Movies List...</p>

    return filteredMovieList.map(movie =>
        <div className='col-sm-4 col-md-3'>
            <div className="content card" key={movie.IMDBID} data-attr={movie.IMDBID} onClick={onMoviePosterClick}>
                <img src={movie.MoviePoster} className="card-img-top" alt="movie" />
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.ShortSummary}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><b>Rating:</b> {movie.Rating}/10</small>
                </div>
            </div>
        </div>
    )
}

return(
    <div className='container'>
        <div className="row row-flex card-group">
            {renderMovies()}
        </div>
    </div>
) 
}
export default MovieCard;