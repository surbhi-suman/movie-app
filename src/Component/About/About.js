import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearSelectedMovie } from '../../reducer/fetchMoviesListReducer';
import { moviesListSelector } from '../../selectors/moviesListSelector';

const About = () =>{

const dispatch = useDispatch();    
const navigate = useNavigate();
const {selectedMovie} = useSelector(moviesListSelector);

const onBackButtonClick = () =>{
    dispatch(clearSelectedMovie());
    navigate("/", { replace: true });
};

return(
    <div className='movie-description-conatainer'>
        <h2 className='movie-description-title'> Movie Description</h2>
        <div className='container movie-wrapper'>
            <div className='row'>
                <div className="col-sm col-md-4">
                    <img className="card-img-top" alt="Movie Poster" src={selectedMovie.MoviePoster} />
                </div>
                <div className="col-sm col-md-8 movie-description">
                    <h3 className="title">{selectedMovie.Title}</h3>
                    <p className='text-bold'>Movie Summary:</p>
                    <p>{selectedMovie.Summary}</p>
                    <p><b>Genre: </b>{selectedMovie.Genres}</p>
                    <p><b>Released Year: </b>{selectedMovie.Year}</p>
                    <p><b>Casts: </b>{selectedMovie.Cast}</p>
                    <p><b>Directed by: </b>{selectedMovie.Director}</p>
                    <p><b>Written by: </b>{selectedMovie.Writers}</p>
                    <p><b>Rating: </b>{selectedMovie.Rating} / 10</p>
                    <button onClick={onBackButtonClick} className="back-btn">&laquo; Back to MovieList</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default About;