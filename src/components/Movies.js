import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>
        Movies Page
      </h1>
      {movies.map(movie =>
        <div>
          <h3>Title: {movie.title}</h3>
          <h4>Time: {movie.time}</h4>
          {movie.genres.map(genre =>
              <ul>Genres: {genre} </ul>
           )}

        </div>
      )}
    </div>
  );
};

export default Movies;
