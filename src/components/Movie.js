import React from 'react';


const Movie = (props) => {

  const movieGenres = () => {
    return props.movieData.genres.map(genre => <li>{genre}</li>)
  }

  return (
    <div>
      <p>Movie Title: {props.movieData.title}</p>
      <p>Run Time: {props.movieData.time}</p>
      <p>Genres: </p>
      <ul>{movieGenres()}</ul>
    </div>
  );
};

export default Movie;
