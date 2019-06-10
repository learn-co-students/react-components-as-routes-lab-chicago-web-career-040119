import React from 'react';
import { movies } from '../data';
import Movie from './Movie'

const Movies = () => {

  const movieDivs = () => {
    return movies.map(movieData => <div><Movie movieData={movieData} /></div>)
  }

  return (
    <div>
      <h1>Movies Page</h1>
        {movieDivs()}
    </div>
  );
};

export default Movies;
