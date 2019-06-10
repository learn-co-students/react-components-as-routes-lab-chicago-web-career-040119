import React from 'react';
import { actors } from '../data';

const allActors = actors.map(actor => {
  return (
    <div>
      <h4>{actor.name}</h4>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
