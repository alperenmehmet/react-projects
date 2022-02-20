import './style.css';

export function CountryCard({ name, population, region, capital, flags }) {
  return (
    <div className='country-card'>
      <img src={flags.png} />
      <h3 className='country-name'>{name.official}</h3>
      <h4 className='country-population'>{population}</h4>
      <h4 className='country-region'>{region}</h4>
      <h4 className='country-capital'>{capital}</h4>
    </div>
  );
}
