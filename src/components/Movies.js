import React from 'react'
import { movies } from '../data'

const MoviesCards = movies.map(movie =>
  <div className='movie card'>
    <h3 className='movie-title'>{movie.title}</h3>
    <p>{movie.time}</p>
    <ul className='genres'>
      {movie.genres.map(genre => <li className='genre'>{genre}</li>)}
    </ul>
  </div>
)

const Movies = () =>
  <div>
    <h1>Movies Page</h1>
    {MoviesCards}
  </div>

export default Movies
