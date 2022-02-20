import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context';

export function SearchCountry() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCountry = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-control '
        ref={searchValue}
        onChange={searchCountry}
        placeholder='Search Country'
      />
    </form>
  );
}
