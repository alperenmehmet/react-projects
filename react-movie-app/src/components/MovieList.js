import React from 'react'
import { useGlobalContext } from '../context'
import MovieCard from './MovieCard'
import { SearchMovie } from './SearchMovie'
import { FaPlus } from 'react-icons/fa'

export const MovieList = () => {
  const { movies, count, setCount, newPageMovies, setNewPageMovies } =
    useGlobalContext()

  const handleClick = () => {
    setCount(count + 1)
    console.log('movie list', count)
  }

  return (
    <div className="container">
      <SearchMovie />
      <div className="row">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />
        })}
      </div>
      <i onClick={handleClick} className="plus-btn">
        <FaPlus />
      </i>
    </div>
  )
}
