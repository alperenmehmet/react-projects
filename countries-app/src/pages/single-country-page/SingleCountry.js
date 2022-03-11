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

  return (
    <div>
      <div className='section-center wrapper'>
        <div>
          <img
            src={country[0]?.flags.png}
            alt='country'
            className='box single-image'
          />
        </div>
        <div className='box '>
          <p className='left-side'>Population : {country[0]?.population}</p>
          <p className='left-side'>
            Native Name: {country[0]?.name?.nativeName?.spa?.official}
          </p>
          <p className='left-side'>Region : {country[0]?.region}</p>
          <p className='left-side'>
            Currencies :
            {
              country[0]?.currencies[Object.keys(country[0]?.currencies)[0]]
                .name
            }
          </p>
          <p className='right-side'>Subregion : {country[0]?.subregion}</p>
          <p className='right-side'>Capital : {country[0]?.capital}</p>
          <p className='right-side'>Top Level Domain : {country[0]?.tld}</p>
          <p className='right-side'>
            Languages :
            {country[0]?.languages[Object.keys(country[0]?.languages)[0]]}
          </p>
          <div>
            Borders:
            {country[0]?.borders?.map((border, index) => {
              return <p key={index}>{border}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
