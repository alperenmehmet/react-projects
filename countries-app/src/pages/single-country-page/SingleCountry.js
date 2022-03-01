import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_COUNTRY } from '../../constants/api';

export function SingleCountry() {
  const [country, setCountry] = useState({});
  const { name } = useParams();

  useEffect(() => {
    async function getCountry() {
      try {
        const response = await fetch(`${URL_COUNTRY}${name}`);
        const data = await response.json();
        setCountry(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCountry();
  }, [name]);

  console.log(country[0]);

  // const {
  //   population,
  //   region,
  //   subregion,
  //   capital,
  //   tld,
  //   currencies,
  //   languages,
  //   borders,
  //   flags,
  // } = country[0];

  return (
    <div>
      {country[0] !== 'undefined' && (
        <div className='section-center'>
          <div>
            <img src={country[0]?.flags.png} alt='country' />
            <h3>{country[0]?.population}</h3>
            <h2>{country[0]?.region}</h2>
            <h2>{country[0]?.currencies.name}</h2>
            <h2>{country[0]?.subregion}</h2>
            <h2>{country[0]?.capital}</h2>
            <h2>{country[0]?.tld}</h2>
            <h2>{country[0]?.languages.cnr}</h2>
            <h2>
              {country[0]?.borders.map((border) => {
                return <p>{border}</p>;
              })}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
