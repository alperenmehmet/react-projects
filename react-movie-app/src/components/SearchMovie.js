import React, {useEffect,useRef} from 'react';
import {useGlobalContext} from "../context";

export const SearchMovie = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef("");

    useEffect(() => {
        searchValue.current.focus();
    }, []);

    function searchMovie() {
        setSearchTerm(searchValue.current.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
  return (
      <form onSubmit={handleSubmit}>
    <div className=''>
      <div className='input-group-lg container mt-5 w-50'>
        <input
          type='text'
          className='form-control '
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-lg'
          ref={searchValue}
          onChange={searchMovie}
          placeholder="Search for a movie"
        />
      </div>
    </div>
      </form>
  );
};
