import React from 'react';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className='col-2 '>
      <div className='make-me-sticky mt-5 '>
        <h2 class='title-genre'>Discover</h2>
        <Link to='/' className='links'>
          <div>Popular</div>
        </Link>
        <Link to='/' className='links'>
          <div>Top Rated</div>
        </Link>
        <Link to='/' className='links'>
          <div>Grossing</div>
        </Link>
        <h2 class='title-genre'>Genres</h2>
        <Link to='/' className='links'>
          <div>Action</div>
        </Link>
        <Link to='/' className='links'>
          <div>Adventure</div>
        </Link>
        <a class='category-link' href='#' onclick="sortMovies('animation')">
          <div class='genre'>Animation</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('comedy')">
          <div class='genre'>Comedy</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('crime')">
          <div class='genre'>Crime</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('documentary')">
          <div class='genre'>Documentary</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('drama')">
          <div class='genre'>Drama</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('family')">
          <div class='genre'>Family</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('fantasy')">
          <div class='genre'>Fantasy</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('history')">
          <div class='genre'>History</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('horror')">
          <div class='genre'>Horror</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('music')">
          <div class='genre'>Music</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('mystery')">
          <div class='genre'>Mystery</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('romance')">
          <div class='genre'>Romance</div>
        </a>
        <a
          class='category-link'
          href='#'
          onclick="sortMovies('science fiction')"
        >
          <div class='genre'>Science Fiction</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('tv movie')">
          <div class='genre'>TV Movie</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('thriller')">
          <div class='genre'>Thriller</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('war')">
          <div class='genre'>War</div>
        </a>
        <a class='category-link' href='#' onclick="sortMovies('western')">
          <div class='genre'>Western</div>
        </a>
      </div>
    </div>
  );
};
