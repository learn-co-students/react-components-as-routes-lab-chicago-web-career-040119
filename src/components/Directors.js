import React from 'react'
import { directors } from '../data'

const DirectorsCards = directors.map(director =>
  <div className='director card'>
    <h3 className='director-name'>{director.name}</h3>
    <ul className='movies'>
      {director.movies.map(movie =>
        <li className='movie'>{movie}</li>
      )}
    </ul>
  </div>
)

const Directors = () =>
  <div>
    <h1>Directors Page</h1>
    {DirectorsCards}
  </div>

export default Directors
