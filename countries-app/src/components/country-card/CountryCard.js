import './style.css';

export function CountryCard({ name, population, region, capital, flag }) {
  return (
    <div className='country-card'>
      <img src={flag} alt={flag} />
      <h3 className='country-name'>{name}</h3>
      <h4 className='country-population'>{population}</h4>
      <h4 className='country-region'>{region}</h4>
      <h4 className='country-capital'>{capital}</h4>
    </div>
  );
}
