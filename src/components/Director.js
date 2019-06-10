import React from 'react';


const Director = (props) => {

  const directorMovies = () => {
    return props.directorData.movies.map(movie => <li>{movie}</li>)
  }

  return (
    <div>
      <p>Director Name: {props.directorData.name}</p>
      <p>Movies: </p>
      <ul>{directorMovies()}</ul>
    </div>
  );
};

export default Director;
