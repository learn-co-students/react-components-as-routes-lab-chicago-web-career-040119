import React from 'react'
import { actors } from '../data'

const ActorsCards = actors.map(actor =>
  <div className='actor card'>
    <h3 className='actor-name'>{actor.name}</h3>
    <ul className='movies'>
      {actor.movies.map(movie => <li className='movie'>{movie}</li>)}
    </ul>
  </div>
)

const Actors = () =>
  <div>
    <h1>Actors Page</h1>
    {ActorsCards}
  </div>

export default Actors
