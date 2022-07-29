import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchMoviesList } from '../../action/fetchMoviesList';
import MovieCard from '../Common/MovieCard';


const Page2 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesList(2))
  }, [dispatch])

  return (
    <section>
      <h2>Page2 Movies List</h2>
      <MovieCard />
    </section>
  )
}

export default Page2;
































































