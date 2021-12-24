import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import MovieCard from './MovieCard';

export const MovieList = () => {
  const { movies } = useGlobalContext();

  return (
    <div className='container'>
      <div className='row'>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};
