import React from 'react';
import { directors } from '../data';

const allDirectors = directors.map(dir => {
  return (
    <div>
      <h4>{dir.name}</h4>
      <ul>
        {dir.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors
