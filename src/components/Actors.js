import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>
        Actors Page
        {actors.map(actor =>
          <div>
            <h3>Name: {actor.name}</h3>
            <p>Movies: </p>
            <ul>
              {actor.movies.map(movie =>
                <li>{movie}</li>
              )}
            </ul>
          </div>
        )}
      </h1>
    </div>
  );
};

export default Actors;
