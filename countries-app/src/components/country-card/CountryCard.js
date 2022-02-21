import { Link } from 'react-router-dom';
import './style.css';

export function CountryCard({ name, population, region, capital, flags }) {
  const newName = name.official;
  return (
    <div className='country-card'>
      <Link to={`/${newName}`}>
        <img src={flags.png} alt='country' />
      </Link>
      <h3 className='country-name'> {name.official}</h3>
      <div className='country-info'>
        <p className='country-population'>
          <span>Population :</span> {population}
        </p>
        <p className='country-region'>
          <span>Region :</span> {region}
        </p>
        <p className='country-capital'>
          <span>Capital :</span> {capital}
        </p>
      </div>
    </div>
  );
}
