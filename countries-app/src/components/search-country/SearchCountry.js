export function SearchCountry() {
  const searchCountry = () => {
    console.log('search');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group-lg container mt-5 w-50'>
        <input
          type='text'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-lg'
          className='form-control '
          ref={searchValue}
          onChange={searchCountry}
          placeholder='Search for a movie'
          style={{ width: '100%' }}
        />
      </div>
    </form>
  );
}
