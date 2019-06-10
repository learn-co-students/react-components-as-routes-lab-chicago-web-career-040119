import React from 'react';
import { movies } from '../data';

const allMovies = movies.map(movie => {
  return (
    <div>
      <h4>{movie.title}</h4>
      <ul>
        <li>Time: {movie.time}</li>
        <li>Genres: </li>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  );
};

export default Movies;
