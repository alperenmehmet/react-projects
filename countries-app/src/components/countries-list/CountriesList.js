import { useGlobalContext } from '../../context';
import { CountryCard } from '../country-card/CountryCard';

export function CountriesList() {
  const { countries } = useGlobalContext();
  console.log('inside list', countries);
  return (
    <div className='countries-container'>
      {countries.map((country, index) => {
        return <CountryCard key={index} {...country} />;
      })}
    </div>
  );
}
