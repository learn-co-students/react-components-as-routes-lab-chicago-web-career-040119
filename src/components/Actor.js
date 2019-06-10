import React from 'react';


const Actor = (props) => {

  const actorMovies = () => {
    return props.actorData.movies.map(movie => <li>{movie}</li>)
  }

  return (
    <div>
      <p>Actor Name: {props.actorData.name}</p>
      <p>Movies: </p>
      <ul>{actorMovies()}</ul>
    </div>
  );
};

export default Actor;
