import { useGlobalContext } from '../../context';
import { CountryCard } from '../country-card/CountryCard';
import { SearchCountry } from '../search-country/SearchCountry';

export function CountriesList() {
  const { countries } = useGlobalContext();
  console.log('inside list', countries);
  return (
    <div className='countries'>
      <div className='section-center countries-grid'>
        {countries.map((country, index) => {
          return <CountryCard key={index} {...country} />;
        })}
      </div>
    </div>
  );
}
